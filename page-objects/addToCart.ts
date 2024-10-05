import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class addToCartPage extends HelperBase{
    

    constructor (page: Page){
        super(page)
    }

    async addItemToCart(itemName: string) {
        const item = this.page.locator(`.inventory_item_description:has-text("${itemName}")`);
        const addToCartButton = item.locator('button[data-test^="add-to-cart"]');
        await addToCartButton.click();

        const removeButton = this.page.getByRole('button', { name: 'Remove' })
        await expect(removeButton).toBeVisible();
        await expect(removeButton).toHaveText('Remove');

        const cartBadge = this.page.locator('#shopping_cart_container').locator('span.shopping_cart_badge');
        await expect(cartBadge).toBeVisible();
        await expect(cartBadge).toHaveText('1');
    }

    async goToCartPage() {

        const cartLink = this.page.locator('#shopping_cart_container').locator('a.shopping_cart_link');
        await cartLink.click();

        const cartTitle = this.page.locator('.header_secondary_container').locator('span.title');
        await expect(cartTitle).toBeVisible();
        await expect(cartTitle).toHaveText('Your Cart');

    }

    async checkItemDisplayInCart(itemName: string) {

        const cartLink = this.page.locator('#shopping_cart_container').locator('a.shopping_cart_link');
        await cartLink.click();

        const cartItem = this.page.locator('.cart_item').locator('div.cart_item_label').locator('div.inventory_item_name');
        await expect(cartItem).toBeVisible();
        await expect(cartItem).toHaveText(itemName);

    }


    async goToCheckOutPage() {

        await this.page.getByRole('button', { name: 'checkout' }).click();

        const checkoutTitle = this.page.locator('.header_secondary_container').locator('span.title');
        await expect(checkoutTitle).toBeVisible();
        await expect(checkoutTitle).toHaveText('Checkout: Your Information');

    }


    async checkOutFormInfo(firstName: string, lastName: string, postalCode: string) {

        const checkOutForm = this.page.locator('.checkout_info').locator('.form_group')
        
        const firstNameField = checkOutForm.locator('#first-name')
        await firstNameField.fill(firstName);

        const lastNameField = checkOutForm.locator('#last-name')
        await lastNameField.fill(lastName);

        const postalCodeField = checkOutForm.locator('#postal-code')
        await postalCodeField.fill(postalCode);

    }

    async proceedCheckOut() {

        await this.page.getByRole('button', {name: "continue"}).click();

        const checkoutReviewTitle = this.page.locator('.header_secondary_container').locator('span.title');
        await expect(checkoutReviewTitle).toBeVisible();
        await expect(checkoutReviewTitle).toHaveText('Checkout: Overview');


        const summeryInfo = this.page.locator('.summary_info')

        const paymentInfo = summeryInfo.locator('[data-test="payment-info-label"]')
        await expect(paymentInfo).toBeVisible();
        await expect(paymentInfo).toHaveText('Payment Information:');

        const shippingInfo = summeryInfo.locator('[data-test="shipping-info-label"]')
        await expect(shippingInfo).toBeVisible();
        await expect(shippingInfo).toHaveText('Shipping Information:');

        const totalPriceInfo = summeryInfo.locator('[data-test="total-info-label"]')
        await expect(totalPriceInfo).toBeVisible();
        await expect(totalPriceInfo).toHaveText('Price Total');

        await this.page.getByRole('button', {name: "finish"}).click();

        const checkoutCompleteContainer = this.page.locator('.checkout_complete_container')

        const checkoutSuccessMessage = checkoutCompleteContainer.locator('[data-test="complete-header"]')
        await expect(checkoutSuccessMessage).toBeVisible();
        await expect(checkoutSuccessMessage).toHaveText('Thank you for your order!');

    }
}