import { Page, expect } from "@playwright/test";
import { LoginPage } from '../page-objects/loginPage'
import { addToCartPage } from "../page-objects/addToCart";

export class pageManager{
    
    readonly page: Page
    private readonly loginPage: LoginPage
    private readonly addtoCartPage: addToCartPage

    constructor (page: Page){
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.addtoCartPage = new addToCartPage(this.page)
    }

    Login(){
        return this.loginPage
    }

    addToCartPage(){
        return this.addtoCartPage
    }

}