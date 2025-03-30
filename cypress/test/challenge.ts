import ShoppingHomePage from '../pagesAndSections/homePage';

describe('Challenge Fravega', () => {

  const homePage = new ShoppingHomePage();

  before(function () {
    
  })

  beforeEach(function() {
    cy.fixture('searchTestData').then((data) => {
      this.data = data
  })
    cy.clearCookies()
  })  

  it('Caso 1 Challenge Fravega', function() {
    const home = homePage.visitHomePageClosingGeoBanner()
    const keyword = this.data.keywords.heladeras.heladeraSamsung
    const resultPage = home.header().search(keyword);
    const productDetailPage = resultPage.goToItemNumber(1)
    productDetailPage.assertProductHasStock()
    const productTitle = productDetailPage.getProductTitle()
    const checkOutPage = productDetailPage.buyProduct()
    checkOutPage.assertProductIsInCart(productTitle)
    checkOutPage.assertURL()
  })

})