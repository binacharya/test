import { test } from '@playwright/test';
import { PageName } from '../pages/page_name/Page';
test.describe('TextBox Page Validations', () => {
  let pageName: PageName;

  test.beforeEach(async ({ page }) => {
    pageName = new PageName(page);
    await pageName.goto();
  });

  test('Fill the form available', async () => {
    await pageName.fillForm()

  });

});