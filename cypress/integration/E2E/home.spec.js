describe('Home Page', () => {

  it('Visit home page and click menu', () => {
    cy.visit('/');
    cy.get('a[href*="/register"]').click()
    cy.visit('/');
    cy.get('a[href*="/login"]').click()
  });

  it('Visit home page and button banner', () => {
    cy.visit('/');
    cy.get('button:first').click()
    cy.visit('/');
    cy.get('a[href*="/login"]').click()
  });

  it('Visit home page and scroll down and click button controls carousel', () => {
    cy.visit('/');
    cy.scrollTo(0, 800)
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Right]').click()
    cy.get('.slideGalery').scrollTo('right')
    cy.wait(3000)
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Left]').click()
    cy.get('img[alt=Left]').click()
    cy.get('.slideGalery').scrollTo('left')
    cy.wait(3000)
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Right]').click()
  });

  // it('Visit home page and scroll down and click button controls carousel', () => {
  //   cy.visit('/');
  //   cy.scrollTo('bottom');
  //   cy.get('button[type=submit]').click()
  // });

});
