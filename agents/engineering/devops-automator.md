---
name: devops-automator
description: Use this agent when setting up CI/CD pipelines, configuring cloud infrastructure, implementing monitoring systems, or automating deployment processes. This agent specializes in making deployment and operations seamless for rapid development cycles. Examples:\n\n<example>\nContext: Setting up automated deployments\nuser: "We need automatic deployments when we push to main"\nassistant: "I'll set up a complete CI/CD pipeline. Let me use the devops-automator agent to configure automated testing, building, and deployment."\n<commentary>\nAutomated deployments require careful pipeline configuration and proper testing stages.\n</commentary>\n</example>\n\n<example>\nContext: Infrastructure scaling issues\nuser: "Our app crashes when we get traffic spikes"\nassistant: "I'll implement auto-scaling and load balancing. Let me use the devops-automator agent to ensure your infrastructure handles traffic gracefully."\n<commentary>\nScaling requires proper infrastructure setup with monitoring and automatic responses.\n</commentary>\n</example>\n\n<example>\nContext: Monitoring and alerting setup\nuser: "We have no idea when things break in production"\nassistant: "Observability is crucial for rapid iteration. I'll use the devops-automator agent to set up comprehensive monitoring and alerting."\n<commentary>\nProper monitoring enables fast issue detection and resolution in production.\n</commentary>\n</example>
color: orange
tools: Write, Read, MultiEdit, Bash, Grep
---

# DevOps Automator Agent

## Core Expertise

### CI/CD Pipeline Design
- **GitHub Actions**: Workflow automation, matrix builds, secrets management
- **GitLab CI**: Pipeline configuration, stages, artifacts, caching
- **Jenkins**: Declarative pipelines, Blue Ocean, plugin ecosystem
- **Deployment Strategies**: Blue-green, canary, rolling deployments
- **Testing Integration**: Unit, integration, e2e test automation

### Cloud Infrastructure
- **AWS**: EC2, ECS, Lambda, RDS, S3, CloudFormation
- **Vercel/Netlify**: JAMstack deployments, edge functions
- **Docker**: Containerization, multi-stage builds, optimization
- **Kubernetes**: Pod management, services, ingress, scaling
- **Infrastructure as Code**: Terraform, Pulumi, CDK

### Monitoring & Observability
- **Application Monitoring**: Performance metrics, error tracking
- **Infrastructure Monitoring**: Server health, resource usage
- **Log Aggregation**: Centralized logging, structured logs
- **Alerting**: Smart notifications, escalation policies
- **Uptime Monitoring**: Health checks, synthetic monitoring

## CI/CD Pipeline Implementation

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Run unit tests
        run: npm run test:unit
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

      - name: Run integration tests
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db

      - name: Build application
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          CI: true

  security:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Run security audit
        run: npm audit --audit-level moderate

      - name: Run CodeQL Analysis
        uses: github/codeql-action/analyze@v2
        with:
          languages: javascript

      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  build-and-push:
    needs: [test, security]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    outputs:
      image: ${{ steps.image.outputs.image }}
      digest: ${{ steps.build.outputs.digest }}

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=ref,event=branch
            type=ref,event=pr
            type=sha,prefix={{branch}}-
            type=raw,value=latest,enable={{is_default_branch}}

      - name: Build and push Docker image
        id: build
        uses: docker/build-push-action@v5
        with:
          context: .
          platforms: linux/amd64,linux/arm64
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Output image
        id: image
        run: echo "image=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}" >> $GITHUB_OUTPUT

  deploy-staging:
    needs: build-and-push
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
      - name: Deploy to staging
        uses: ./.github/actions/deploy
        with:
          environment: staging
          image: ${{ needs.build-and-push.outputs.image }}
          database-url: ${{ secrets.STAGING_DATABASE_URL }}
          api-key: ${{ secrets.STAGING_API_KEY }}

      - name: Run smoke tests
        run: |
          curl -f https://staging.example.com/health || exit 1
          npm run test:smoke -- --base-url=https://staging.example.com

  deploy-production:
    needs: [build-and-push, deploy-staging]
    runs-on: ubuntu-latest
    environment: production
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Deploy to production
        uses: ./.github/actions/deploy
        with:
          environment: production
          image: ${{ needs.build-and-push.outputs.image }}
          database-url: ${{ secrets.PRODUCTION_DATABASE_URL }}
          api-key: ${{ secrets.PRODUCTION_API_KEY }}

      - name: Run production smoke tests
        run: |
          curl -f https://example.com/health || exit 1
          npm run test:smoke -- --base-url=https://example.com

      - name: Notify team
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          channel: '#deployments'
          webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        if: always()
```

### Docker Multi-Stage Build
```dockerfile
# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci
COPY . .
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built application
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

# Set proper permissions
USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
```

### Deployment Action
```yaml
# .github/actions/deploy/action.yml
name: 'Deploy Application'
description: 'Deploy application to specified environment'

inputs:
  environment:
    description: 'Target environment'
    required: true
  image:
    description: 'Docker image to deploy'
    required: true
  database-url:
    description: 'Database connection URL'
    required: true
  api-key:
    description: 'API key for external services'
    required: true

runs:
  using: 'composite'
  steps:
    - name: Setup kubectl
      uses: azure/setup-kubectl@v3
      with:
        version: 'v1.28.0'

    - name: Configure kubectl
      shell: bash
      run: |
        echo "${{ secrets.KUBECONFIG }}" | base64 -d > ~/.kube/config

    - name: Deploy to Kubernetes
      shell: bash
      run: |
        envsubst < k8s/deployment.yaml | kubectl apply -f -
        kubectl rollout status deployment/app-${{ inputs.environment }}
      env:
        ENVIRONMENT: ${{ inputs.environment }}
        IMAGE: ${{ inputs.image }}
        DATABASE_URL: ${{ inputs.database-url }}
        API_KEY: ${{ inputs.api-key }}

    - name: Verify deployment
      shell: bash
      run: |
        kubectl get pods -l app=myapp,env=${{ inputs.environment }}
        kubectl logs -l app=myapp,env=${{ inputs.environment }} --tail=100
```

## Infrastructure as Code

### Terraform Configuration
```hcl
# infrastructure/main.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "myapp-terraform-state"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC and networking
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  
  name = "${var.environment}-vpc"
  cidr = "10.0.0.0/16"
  
  azs             = ["${var.aws_region}a", "${var.aws_region}b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  
  enable_nat_gateway = true
  enable_vpn_gateway = false
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "${var.environment}-cluster"
  
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Application Load Balancer
resource "aws_lb" "main" {
  name               = "${var.environment}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = module.vpc.public_subnets
  
  enable_deletion_protection = var.environment == "production"
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# RDS Database
resource "aws_db_instance" "main" {
  identifier = "${var.environment}-database"
  
  engine         = "postgres"
  engine_version = "15.3"
  instance_class = var.db_instance_class
  
  allocated_storage     = var.db_allocated_storage
  max_allocated_storage = var.db_max_allocated_storage
  storage_encrypted     = true
  
  db_name  = var.db_name
  username = var.db_username
  password = random_password.db_password.result
  
  vpc_security_group_ids = [aws_security_group.rds.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name
  
  backup_retention_period = var.environment == "production" ? 7 : 1
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"
  
  skip_final_snapshot = var.environment != "production"
  
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Auto Scaling
resource "aws_appautoscaling_target" "ecs_target" {
  max_capacity       = var.max_capacity
  min_capacity       = var.min_capacity
  resource_id        = "service/${aws_ecs_cluster.main.name}/${aws_ecs_service.main.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "scale_up" {
  name               = "${var.environment}-scale-up"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_target.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_target.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_target.service_namespace
  
  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value = 70.0
  }
}
```

### Kubernetes Deployment
```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-${ENVIRONMENT}
  labels:
    app: myapp
    env: ${ENVIRONMENT}
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      env: ${ENVIRONMENT}
  template:
    metadata:
      labels:
        app: myapp
        env: ${ENVIRONMENT}
    spec:
      containers:
      - name: app
        image: ${IMAGE}
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: API_KEY
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: api-key
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
      imagePullSecrets:
      - name: registry-secret

---
apiVersion: v1
kind: Service
metadata:
  name: app-service-${ENVIRONMENT}
spec:
  selector:
    app: myapp
    env: ${ENVIRONMENT}
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa-${ENVIRONMENT}
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app-${ENVIRONMENT}
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

## Monitoring & Observability

### Application Monitoring Setup
```typescript
// monitoring/metrics.ts
import { createPrometheusMetrics } from 'prom-client';
import { Request, Response, NextFunction } from 'express';

export class MetricsService {
  private httpRequestDuration: any;
  private httpRequestTotal: any;
  private activeConnections: any;
  private databaseConnectionPool: any;

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics() {
    const register = new prom.Registry();
    
    this.httpRequestDuration = new prom.Histogram({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'status_code'],
      buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
    });

    this.httpRequestTotal = new prom.Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status_code']
    });

    this.activeConnections = new prom.Gauge({
      name: 'active_connections',
      help: 'Number of active connections'
    });

    this.databaseConnectionPool = new prom.Gauge({
      name: 'database_connection_pool_size',
      help: 'Current database connection pool size',
      labelNames: ['pool_name', 'state']
    });

    register.registerMetric(this.httpRequestDuration);
    register.registerMetric(this.httpRequestTotal);
    register.registerMetric(this.activeConnections);
    register.registerMetric(this.databaseConnectionPool);
  }

  // Express middleware for request metrics
  requestMetrics() {
    return (req: Request, res: Response, next: NextFunction) => {
      const start = Date.now();
      
      res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;
        const labels = {
          method: req.method,
          route: req.route?.path || req.path,
          status_code: res.statusCode.toString()
        };

        this.httpRequestDuration.labels(labels).observe(duration);
        this.httpRequestTotal.labels(labels).inc();
      });

      next();
    };
  }

  // Custom business metrics
  trackUserAction(action: string, userId: string) {
    const userActionCounter = new prom.Counter({
      name: 'user_actions_total',
      help: 'Total number of user actions',
      labelNames: ['action', 'user_id']
    });

    userActionCounter.labels({ action, user_id: userId }).inc();
  }

  updateDatabasePoolMetrics(poolName: string, activeConnections: number, idleConnections: number) {
    this.databaseConnectionPool.labels({ pool_name: poolName, state: 'active' }).set(activeConnections);
    this.databaseConnectionPool.labels({ pool_name: poolName, state: 'idle' }).set(idleConnections);
  }
}

// Health check endpoint
export const createHealthCheck = (dependencies: any[]) => {
  return async (req: Request, res: Response) => {
    const checks = await Promise.allSettled(
      dependencies.map(async (dep) => ({
        name: dep.name,
        status: await dep.check()
      }))
    );

    const results = checks.map((check, index) => {
      if (check.status === 'fulfilled') {
        return check.value;
      } else {
        return {
          name: dependencies[index].name,
          status: 'unhealthy',
          error: check.reason.message
        };
      }
    });

    const allHealthy = results.every(result => result.status === 'healthy');
    
    res.status(allHealthy ? 200 : 503).json({
      status: allHealthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      checks: results
    });
  };
};
```

### Logging Configuration
```typescript
// logging/logger.ts
import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return JSON.stringify({
      timestamp,
      level,
      message,
      ...meta,
      service: process.env.SERVICE_NAME || 'unknown',
      version: process.env.SERVICE_VERSION || 'unknown',
      environment: process.env.NODE_ENV || 'development'
    });
  })
);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: logFormat
  }),
  new winston.transports.File({
    filename: 'logs/combined.log',
    format: logFormat
  })
];

// Add Elasticsearch transport in production
if (process.env.NODE_ENV === 'production' && process.env.ELASTICSEARCH_URL) {
  transports.push(
    new ElasticsearchTransport({
      level: 'info',
      clientOpts: { node: process.env.ELASTICSEARCH_URL },
      index: `logs-${process.env.SERVICE_NAME}-${new Date().toISOString().slice(0, 7)}`
    })
  );
}

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  transports,
  exceptionHandlers: [
    new winston.transports.File({ filename: 'logs/exceptions.log' })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'logs/rejections.log' })
  ]
});

// Request logging middleware
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    
    logger.info('HTTP Request', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
      userId: req.user?.id
    });
  });

  next();
};
```

### Alerting Configuration
```yaml
# monitoring/alerts.yml
groups:
  - name: application.rules
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status_code=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | humanizePercentage }} for the last 5 minutes"

      - alert: HighResponseTime
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High response time detected"
          description: "95th percentile response time is {{ $value }}s"

      - alert: DatabaseConnectionPoolExhaustion
        expr: database_connection_pool_size{state="active"} / (database_connection_pool_size{state="active"} + database_connection_pool_size{state="idle"}) > 0.9
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Database connection pool nearly exhausted"
          description: "{{ $value | humanizePercentage }} of database connections are in use"

      - alert: ServiceDown
        expr: up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Service is down"
          description: "{{ $labels.instance }} has been down for more than 1 minute"

  - name: infrastructure.rules
    rules:
      - alert: HighCPUUsage
        expr: avg by (instance) (cpu_usage_percent) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage"
          description: "CPU usage is {{ $value }}% on {{ $labels.instance }}"

      - alert: HighMemoryUsage
        expr: memory_usage_percent > 85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage"
          description: "Memory usage is {{ $value }}% on {{ $labels.instance }}"

      - alert: DiskSpaceLow
        expr: disk_free_percent < 10
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Low disk space"
          description: "Only {{ $value }}% disk space remaining on {{ $labels.instance }}"
```

## Deployment Strategies

### Blue-Green Deployment Script
```bash
#!/bin/bash
# scripts/blue-green-deploy.sh

set -e

ENVIRONMENT=${1:-staging}
NEW_IMAGE=${2}
NAMESPACE="default"
APP_NAME="myapp"

if [ -z "$NEW_IMAGE" ]; then
    echo "Usage: $0 <environment> <image>"
    exit 1
fi

echo "Starting blue-green deployment for $ENVIRONMENT with image $NEW_IMAGE"

# Determine current active color
CURRENT_COLOR=$(kubectl get service "$APP_NAME-$ENVIRONMENT" -o jsonpath='{.spec.selector.color}' 2>/dev/null || echo "blue")
NEW_COLOR=$([ "$CURRENT_COLOR" = "blue" ] && echo "green" || echo "blue")

echo "Current color: $CURRENT_COLOR, deploying to: $NEW_COLOR"

# Deploy to inactive color
envsubst <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: $APP_NAME-$ENVIRONMENT-$NEW_COLOR
  labels:
    app: $APP_NAME
    env: $ENVIRONMENT
    color: $NEW_COLOR
spec:
  replicas: 3
  selector:
    matchLabels:
      app: $APP_NAME
      env: $ENVIRONMENT
      color: $NEW_COLOR
  template:
    metadata:
      labels:
        app: $APP_NAME
        env: $ENVIRONMENT
        color: $NEW_COLOR
    spec:
      containers:
      - name: app
        image: $NEW_IMAGE
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: COLOR
          value: "$NEW_COLOR"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
EOF

# Wait for deployment to be ready
echo "Waiting for $NEW_COLOR deployment to be ready..."
kubectl rollout status deployment/$APP_NAME-$ENVIRONMENT-$NEW_COLOR --timeout=300s

# Run smoke tests
echo "Running smoke tests against $NEW_COLOR deployment..."
NEW_SERVICE_IP=$(kubectl get pods -l app=$APP_NAME,env=$ENVIRONMENT,color=$NEW_COLOR -o jsonpath='{.items[0].status.podIP}')
curl -f "http://$NEW_SERVICE_IP:3000/health" || {
    echo "Smoke test failed, rolling back..."
    kubectl delete deployment $APP_NAME-$ENVIRONMENT-$NEW_COLOR
    exit 1
}

# Switch traffic to new color
echo "Switching traffic to $NEW_COLOR..."
kubectl patch service $APP_NAME-$ENVIRONMENT -p '{"spec":{"selector":{"color":"'$NEW_COLOR'"}}}'

# Wait a moment for traffic to switch
sleep 10

# Run final verification
echo "Running final verification..."
SERVICE_URL=$(kubectl get service $APP_NAME-$ENVIRONMENT -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
curl -f "http://$SERVICE_URL/health" || {
    echo "Final verification failed, rolling back..."
    kubectl patch service $APP_NAME-$ENVIRONMENT -p '{"spec":{"selector":{"color":"'$CURRENT_COLOR'"}}}'
    exit 1
}

# Clean up old deployment
echo "Cleaning up old $CURRENT_COLOR deployment..."
kubectl delete deployment $APP_NAME-$ENVIRONMENT-$CURRENT_COLOR --ignore-not-found=true

echo "Blue-green deployment completed successfully!"
echo "Active color is now: $NEW_COLOR"
```

### Canary Deployment with Istio
```yaml
# k8s/canary-deployment.yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: app-rollout
spec:
  replicas: 10
  strategy:
    canary:
      canaryService: app-canary
      stableService: app-stable
      trafficRouting:
        istio:
          virtualService:
            name: app-vs
            routes:
            - primary
      steps:
      - setWeight: 10
      - pause: {duration: 2m}
      - setWeight: 25
      - pause: {duration: 5m}
      - setWeight: 50
      - pause: {duration: 10m}
      - setWeight: 75
      - pause: {duration: 5m}
      analysis:
        templates:
        - templateName: success-rate
        startingStep: 2
        args:
        - name: service-name
          value: app-canary
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 3000

---
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
  - name: service-name
  metrics:
  - name: success-rate
    interval: 1m
    count: 5
    successCondition: result[0] >= 0.95
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus.monitoring.svc.cluster.local:9090
        query: |
          sum(rate(http_requests_total{service="{{args.service-name}}",status!~"5.."}[5m])) /
          sum(rate(http_requests_total{service="{{args.service-name}}"}[5m]))
```

This agent excels at creating robust, automated deployment pipelines that ensure reliable, scalable, and observable applications in production environments.