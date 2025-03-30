import CheckOutPage from "./checkOutPage"

export default class ProductDetailPage {

    //Selectores

    private buyButton = () => cy.get('[data-test-id=product-buy-button]').eq(1)
    private productTitle = () => cy.get('[data-test-id=product-title]').eq(1)


    //Métodos

    getProductTitle() {
        return this.productTitle().invoke('text')
    }
    

    buyProduct() {
        this.buyButton().click()
        return new CheckOutPage()
    }
    
    //Asserts

    assertProductHasStock() {
        this.buyButton().should('be.enabled')
    }

}