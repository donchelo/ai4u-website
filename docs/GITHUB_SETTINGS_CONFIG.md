# Configuración de GitHub Settings

Esta guía documenta la configuración necesaria en GitHub para que el proyecto funcione correctamente con GitHub Pages y GitHub Actions.

## Configuración de GitHub Pages

### Ubicación
**Settings → Pages** (en la barra lateral izquierda del repositorio)

### Configuración Requerida

1. **Source (Origen)**
   - Selecciona: **GitHub Actions**
   - Esto permite que el workflow `.github/workflows/deploy.yml` controle el deployment

2. **Custom domain (Dominio personalizado)**
   - Dominio: `ai4u.com.co`
   - Verifica que esté configurado correctamente
   - **Enforce HTTPS**: Activar (recomendado)

3. **Build and deployment**
   - Source: **GitHub Actions** (seleccionado automáticamente)
   - El workflow se ejecutará automáticamente en cada push a `main`

### Verificación

Después de configurar:
- El dominio personalizado debe aparecer en la sección de Pages
- Debe mostrar "Enforce HTTPS" como activado
- El workflow debe aparecer en la lista de workflows disponibles

## Configuración de Branches

### Ubicación
**Settings → Branches** (en la barra lateral izquierda del repositorio)

### Default Branch

1. **Default branch**
   - Asegúrate de que `main` sea la rama por defecto
   - Si no lo es, cambia desde **Settings → Branches → Default branch**

### Branch Protection Rules (Opcional pero Recomendado)

Protege la rama `main` para evitar cambios accidentales:

1. Haz clic en **Add rule** o edita la regla existente para `main`

2. **Branch name pattern**
   - Ingresa: `main`

3. **Protect matching branches** - Configura las siguientes opciones:

   **a) Require pull request reviews before merging**
   - Opcional: Activar si trabajas en equipo
   - Número de aprobaciones requeridas: 1 (ajustar según necesidad)

   **b) Require status checks to pass before merging**
   - ✅ Activar
   - **Require branches to be up to date before merging**: Activar
   - En **Status checks that are required**, selecciona:
     - `build` (del workflow de GitHub Actions)

   **c) Require conversation resolution before merging**
   - Opcional: Activar para asegurar que todos los comentarios estén resueltos

   **d) Do not allow bypassing the above settings**
   - Recomendado: Activar para administradores también

4. Haz clic en **Create** o **Save changes**

### Resultado

Con esta configuración:
- Los cambios a `main` requerirán que el workflow de build pase
- Se previenen merges accidentales
- Se mantiene la calidad del código

## Configuración de Actions

### Ubicación
**Settings → Actions → General**

### Permisos del Workflow

1. **Workflow permissions**
   - Selecciona: **Read and write permissions**
   - Esto permite que el workflow despliegue a GitHub Pages
   - ✅ Marca: **Allow GitHub Actions to create and approve pull requests** (si es necesario)

2. **Artifact and log retention**
   - Días para retener logs: 90 (recomendado)
   - Días para retener artefactos: 90 (recomendado)

### Variables y Secrets

Si necesitas variables de entorno o secrets:

1. Ve a **Settings → Secrets and variables → Actions**
2. Agrega secrets o variables según necesidad
3. El workflow actual no requiere secrets adicionales

## Configuración del Repositorio General

### Ubicación
**Settings → General**

### Configuración Recomendada

1. **Features**
   - ✅ Issues: Activar (para tracking de bugs y features)
   - ✅ Projects: Activar (para gestión de proyectos)
   - ✅ Wiki: Opcional
   - ✅ Discussions: Opcional

2. **Pull Requests**
   - ✅ Allow merge commits
   - ✅ Allow squash merging (recomendado para mantener historial limpio)
   - ✅ Allow rebase merging

## Verificación Final

### Checklist

- [ ] GitHub Pages configurado con source: GitHub Actions
- [ ] Dominio personalizado `ai4u.com.co` configurado
- [ ] HTTPS forzado en GitHub Pages
- [ ] Branch `main` es la rama por defecto
- [ ] Branch protection rules configuradas (opcional)
- [ ] Workflow permissions configurados correctamente
- [ ] El workflow `.github/workflows/deploy.yml` existe

### Prueba de Funcionamiento

1. Haz un cambio pequeño en `main`
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "test: verificar configuración"
   git push origin main
   ```
3. Ve a **Actions** y verifica que el workflow se ejecute
4. Espera 1-2 minutos
5. Verifica que el sitio esté actualizado en `https://ai4u.com.co`

## Troubleshooting

### El workflow no se ejecuta

- Verifica que el archivo `.github/workflows/deploy.yml` exista
- Verifica que el workflow tenga la sintaxis correcta
- Revisa **Settings → Actions → General** para permisos

### GitHub Pages no se actualiza

- Verifica que GitHub Pages esté configurado para usar GitHub Actions
- Revisa los logs del workflow en **Actions**
- Verifica que el dominio personalizado esté configurado

### Errores de permisos

- Verifica **Settings → Actions → General → Workflow permissions**
- Asegúrate de que tenga permisos de escritura para Pages

## Referencias

- [GitHub Pages Settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)

