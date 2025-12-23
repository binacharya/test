import { expect, Page } from "@playwright/test";
import { locators } from './locators';

export class PageName {
  readonly page: Page;
  readonly locators = locators;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.truckit.net/get-a-quote/pallets-and-packages?category_id=53&collect_address=&deliver_address=');
  }

  async fillForm(){

  await this.page.getByRole('textbox', { name: this.locators.contentsOnPallet }).click();
  await this.page.getByRole('textbox', { name: this.locators.contentsOnPallet }).fill('test');
  await this.page.locator(this.locators.palletSize).selectOption('1');
  await this.page.getByRole('button', { name: this.locators.plusButton.name }).click();
  await this.page.getByPlaceholder(this.locators.heightPerPallet).click();
  await this.page.getByPlaceholder(this.locators.heightPerPallet).fill('4');
  await this.page.getByPlaceholder(this.locators.weightPerPallet).click();
  await this.page.getByPlaceholder(this.locators.weightPerPallet).fill('4');
  await this.page.locator(this.locators.fullAddressCollect).click();
  await this.page.locator(this.locators.fullAddressCollect).click();
  await this.page.locator(this.locators.fullAddressCollect).fill('Brisbane');
  await this.page.getByText(this.locators.brisbaneCityText, { exact: true }).first().click();
  await this.page.locator(this.locators.fullAddressDelivery).click();
  await this.page.locator(this.locators.fullAddressDelivery).fill('Sydney');
  await this.page.getByText(this.locators.sydneyNSWText).first().click();
  await this.page.getByText(this.locators.senderText).click();
  await this.page.locator(this.locators.loadingFacilities).selectOption('1');
  await this.page.locator(this.locators.unloadingFacilities).selectOption('3');
  await this.page.locator(`${this.locators.listingDatesForm} label`).filter({ hasText: this.locators.readyNowLabel }).locator('i').check();
  await this.page.locator(`${this.locators.listingDatesForm} label`).filter({ hasText: this.locators.readyNowLabel }).locator('i').click();
  await this.page.locator(`${this.locators.listingDatesDeliveryForm} label`).filter({ hasText: this.locators.readyNowLabel }).locator('i').check();
  await this.page.locator(`${this.locators.listingDatesDeliveryForm} label`).filter({ hasText: this.locators.readyNowLabel }).locator('i').click();
  await this.page.getByRole('link', { name: this.locators.continueLink.name }).click();
  }
}
