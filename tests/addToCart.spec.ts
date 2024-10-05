import {expect, test} from '@playwright/test'
import { pageManager } from '../page-objects/pageManager'
import { loginData, checkoutData, itemNames } from '../test-data/testData';

test.beforeEach(async ({page}) =>{

    await page.goto('https://www.saucedemo.com/')
    
}) 

test('Test Adding Item to Cart and Checkout', async({page}) => {
    const pm = new pageManager(page)

    await pm.Login().loginToWebsite(loginData.username, loginData.password)
    await pm.addToCartPage().addItemToCart(itemNames.bikeLight)
    await pm.addToCartPage().goToCartPage()
    await pm.addToCartPage().checkItemDisplayInCart(itemNames.bikeLight)
    await pm.addToCartPage().goToCheckOutPage()
    await pm.addToCartPage().checkOutFormInfo(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode)
    await pm.addToCartPage().proceedCheckOut()

})