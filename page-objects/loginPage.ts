import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class LoginPage extends HelperBase{

        constructor (page: Page){
            super(page)
        }
    
     async loginToWebsite(userName: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(userName);
        await this.page.getByRole('textbox', {name: "password"}).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        const productsTitle = this.page.getByText('Products')
        await expect(productsTitle).toBeVisible();
        await expect(productsTitle).toHaveText('Products');
        
    }

}