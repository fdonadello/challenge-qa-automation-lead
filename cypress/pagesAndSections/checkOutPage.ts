import cypress = require("cypress")

export default class CheckOutPage {


    //Selectores

    private itemName = () => cy.get("#__next > div > div > main > div > div> div > div > div:nth-child(1) > div:nth-child(2)>div:nth-child(1)") 
    //Este elemento se tiene que mejorar usando un selector personalizado dentro de checkout, en este momento no existe



    //Métodos



    //Asserts

    assertURL(){
        cy.url().then((url) => {
            const expectedUrls = [Cypress.env('checkout.url'), Cypress.env('checkout.url.headless')];
            expect(expectedUrls).to.include(url); 
        });
    }

    assertProductIsInCart(productTitle: Cypress.Chainable<string>) {
        productTitle.then((title) =>{
            this.itemName().should('be.visible')
            this.itemName().should('contain', title)
        })
        
    }
    
}
