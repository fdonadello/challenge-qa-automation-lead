import Header from './headerSection';

export default class ShoppingHomePage {


    header = () => new Header()
    
    //Selectores


    //Métodos

    visitHomePageClosingGeoBanner() {
      const homePage = new ShoppingHomePage();
      cy.visit(Cypress.env('shopping.baseUrl'))
      cy.closeGeoBanner();
      return homePage;
    }

    //Asserts
}