import { test } from '@playwright/test';
import { PageName } from '../pages/LoginPage/Page';

test.describe('Login Page Validations', () => {
  let loginPage: PageName;

  test.beforeEach(async ({ page }) => {
    loginPage = new PageName(page);
    await loginPage.goto();
  });

  test('Verify login validation error', async () => {
    await loginPage.fillForm();
  });
});
