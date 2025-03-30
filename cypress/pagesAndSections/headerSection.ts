import ResultPage from './resultPage';

export default class Header {


    //Selectores

    private searchInput = () => cy.get('input[name="keyword"]').first()
    private searchButton = () => cy.get('button[type="submit"]').first()

    //Métodos

    search(keyword: string) {
        this.searchInput().type(keyword)
        this.searchButton().click()
        return new ResultPage()
      }

}