import ProductDetailPage from "./productDetailPage"

export default class ResultPage {

    //Selectores

    private items = () => cy.get('[data-test-id="result-item"]')

    //Métodos

    goToItemNumber(index: number){
        this.items().eq(index).click()
        return new ProductDetailPage()
    }

    //Asserts
    
}