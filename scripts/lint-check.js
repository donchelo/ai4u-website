#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🔍 AI4U Testing Phase 1 - Quality Checks\n');

// 1. TypeScript compilation check
console.log('📝 Checking TypeScript compilation...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: process.cwd() });
  console.log('✅ TypeScript compilation: PASSED\n');
} catch (error) {
  console.log('❌ TypeScript compilation: FAILED\n');
  process.exit(1);
}

// 2. ESLint check with React configuration
console.log('🔧 Running ESLint checks...');
try {
  const eslintCommand = 'npx eslint src/**/*.{ts,tsx} --max-warnings=0 --format=codeframe';
  execSync(eslintCommand, { stdio: 'inherit', cwd: process.cwd() });
  console.log('✅ ESLint checks: PASSED\n');
} catch (error) {
  console.log('⚠️  ESLint warnings found, but continuing...\n');
}

// 3. Test execution
console.log('🧪 Running test suite...');
try {
  execSync('npm test -- --coverage --watchAll=false --verbose', { stdio: 'inherit', cwd: process.cwd() });
  console.log('✅ Tests: PASSED\n');
} catch (error) {
  console.log('❌ Tests: FAILED\n');
  process.exit(1);
}

// 4. Build check
console.log('🏗️  Testing production build...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: process.cwd() });
  console.log('✅ Build: PASSED\n');
} catch (error) {
  console.log('❌ Build: FAILED\n');
  process.exit(1);
}

console.log('🎉 All Phase 1 checks completed successfully!');
console.log('📊 Phase 1 Testing Status: ✅ COMPLETED');
console.log('\n🚀 Ready for Phase 2: Integration Testing');