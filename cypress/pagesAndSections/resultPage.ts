import ProductDetailPage from "./productDetailPage"

export default class ResultPage {

    //Selectores

    private items = () => cy.get('[data-test-id="result-item"]')
    private compareCheck = () => cy.get('[data-test-id="compare-check"]')
    private compareButton = () => cy.get('[data-test-id="compare-button"]')
    private comparePageBuyButton = () => cy.get('[data-test-id="buy-button"]')
    private comparationArticle = () => cy.get('article')

    //Métodos

    goToItemNumber(index: number) {
        this.items().eq(index).click()
        return new ProductDetailPage()
    }

    randomSelectItemsToCompare() {
        const quantity = Math.floor(Math.random() * 3 + 2);
        for (let index = 0; index < quantity; index++) {
            this.compareCheck().eq(index).click({ force: true })
        }
        return quantity
    }

    goToCompareWindow() {
        this.compareButton().click()
    }

    //Asserts

    assertEachArticleHasABuyButton(quantity: number) {
        for(let index = 0; index < quantity; index++) {
            this.comparePageBuyButton().eq(index).should('be.visible')
        }
    }

    assertComparedItemsQuantity(quantity: number) {
        this.comparationArticle().should('have.length', quantity)
    }
}