import { expect, Page } from "@playwright/test";
import { locators } from './locators';

export class PageName {
  readonly page: Page;
  readonly locators = locators;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.truckit.net/login');
  }

  async fillForm(){
 await this.page.getByRole('textbox', { name: this.locators.emailField }).click();
  await this.page.getByRole('textbox', { name: this.locators.emailField }).fill('acharyabina01@gmail.com');
  await this.page.getByRole('textbox', { name: this.locators.passwordField }).click();
  await this.page.getByRole('textbox', { name: this.locators.passwordField }).fill('Bina12');
  await this.page.getByRole('link', { name: this.locators.loginButton, exact: true }).click();
  await expect(this.page.getByText(this.locators.validationErrorText)).toBeVisible();
  await expect(this.page.locator(this.locators.userForm)).toContainText(this.locators.validationErrorMessage);
  }
}
