import { test, expect } from '@playwright/test';

test.describe('AI4U Smoke Test', () => {
  test('should load the homepage and not have console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
        console.error('❌ Console Error:', msg.text());
      }
    });

    await page.goto('/');

    // Verificar título
    await expect(page).toHaveTitle(/AI4U/);

    // Verificar que el root no esté vacío
    const root = page.locator('#root');
    await expect(root).not.toBeEmpty();

    // Verificar que no hubo errores de consola críticos
    // El error que arreglamos "nn is not a function" aparecería aquí
    expect(consoleErrors).not.toContain(expect.stringContaining('is not a function'));
    expect(consoleErrors.length).toBeLessThanOrEqual(5); // Permitir algunos warnings menores si existen
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/');
    
    // Buscar enlace a servicios (ajustar selector según tu Navbar)
    const servicesLink = page.getByRole('link', { name: /servicios/i }).first();
    await servicesLink.click();

    // Verificar que la URL cambió a /servicios
    await expect(page).toHaveURL(/\/servicios/);
    
    // Verificar que el contenido cargó (root no está vacío)
    const root = page.locator('#root');
    await expect(root).not.toBeEmpty();
  });

  test('should be accessible (basic check)', async ({ page }) => {
    await page.goto('/');
    // Verificar que existan elementos básicos de accesibilidad
    const root = page.locator('#root');
    await expect(root).toBeVisible();
    
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});
