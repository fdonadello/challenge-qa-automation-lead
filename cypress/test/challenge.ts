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

  it('Case 1: Challenge Fravega', function() {
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

  it('Case 2: seach "Heladera Samsung", compare 2 to 4 first results, assert results quantity and if buy button is visible for each', function() {
    const home = homePage.visitHomePageClosingGeoBanner()
    const keyword = this.data.keywords.heladeras.heladeraSamsung
    const resultPage = home.header().search(keyword)
    const comparaedItems = resultPage.randomSelectItemsToCompare()
    resultPage.goToCompareWindow()
    resultPage.assertComparedItemsQuantity(comparaedItems)
    resultPage.assertEachArticleHasABuyButton(comparaedItems)
    
  })

})