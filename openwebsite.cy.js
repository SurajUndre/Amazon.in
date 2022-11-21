



describe('Amazon', () => {
  it('amazon assertion test', () => {
    cy.visit('https://amazon.in')
    
    cy.get('.nav-search-field').click().type('Iphone x')

    cy.get('#nav-search-submit-text').click()
    cy.xpath("//span[text()='Apple iPhone X 64GB']/parent::a").invoke('removeAttr', 'target').click()
    /// cy.xpath("//input[@id='add-to-cart-button']").click()
    /// cy.xpath("//span[text()='Add to Cart']/preceding-sibling::input").dblclick()
    cy.get("#add-to-cart-button[value='Add to Cart']").click({force:true})

    cy.xpath("//span[text()='3.5 mm Jack']/preceding-sibling::div/child::label/child::i['a-icon a-icon-checkbox']").click()     
    
    




    /// cy.get("[href='/gp/goldbox?ref_=nav_cs_gb']").click()
    /// cy.get('.hm-icon').click()
    /// cy.get('#hmenu-canvas-background > .nav-sprite').click()
    
    /// cy.get('#nav-link-accountList-nav-line-1').dblclick()
    /// cy.get('#ap_email').type('9595954233')
    /// cy.get('.a-button-inner > #continue').click()
    /// cy.get('#ap_password').type('Surajundre@95')


    /// cy.get('#signInSubmit').click()
    /// cy.get('#p_n_feature_nineteen_browse-bin\/24046900011 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
    /// .click()
    /// cy.get("//span[text()='boAt']/preceding-sibling::div/child::label/child::i")
    /// cy.get('.a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left').click()
    

    /// cy.get('#nav-cart').dblclick()

  })
})