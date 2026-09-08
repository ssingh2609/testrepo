import { defineConfig } from '@playwright/test';

// Minimal config. No browser needed for this demo — the point is CI mechanics,
// not the browser. These tests are pure assertions, so they run anywhere fast.
export default defineConfig({
  testDir: './tests',
  reporter: 'list',
});
