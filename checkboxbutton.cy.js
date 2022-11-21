describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://amazon.in')

    cy.get('.nav-search-field').click().type('Boat headphones')

    cy.get('#nav-search-submit-text').click()

    cy.xpath("//span[text()='3.5 mm Jack']/preceding-sibling::div/child::label/child::i['a-icon a-icon-checkbox']").click()
    
    cy.xpath("//span[text()='Top Brands']/preceding-sibling::div/child::label/child::i").click()
    
    cy.xpath("//span[text()='Newly Launched Noise Two On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes, Dual Pairing, BT v5.3 (Calm White)']/parent::a").invoke('removeAttr', 'target').click()

    cy.get("#add-to-cart-button[value='Add to Cart']").click({force:true})

    
  })
})