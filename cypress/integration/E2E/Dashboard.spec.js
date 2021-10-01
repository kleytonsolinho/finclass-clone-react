describe('Dashboard Page', () => {

  it('Visit home page and click menu login add information and signin', () => {
    cy.visit('/');
    cy.get('a[href*="/login"]').click();

    cy.get('input[name=email]').type('fake-user@email.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button:first').click();
  });

  it('Visit dashboard page navigation home dashboard', () => {
    cy.visit('/dashboard');
    cy.scrollTo(0, 3000);
    cy.get('button:last').click();
  });


  it('Visit dashboard page navigation click banner button', () => {
    cy.visit('/dashboard');
    cy.scrollTo(0, 100);
    cy.get('.btns > button:first').click();
    cy.scrollTo(0, 3000);
    cy.wait(2000);
    cy.scrollTo(0, 500);
    cy.wait(2000);
    cy.visit('/dashboard');
    cy.get('.btns > button:last').click();
    cy.scrollTo(0, 3000);
    cy.wait(2000);
    cy.scrollTo(0, 500);
    cy.wait(2000);
    cy.visit('/dashboard');
  });

  it('Visit dashboard page navigation click controls banner', () => {
    cy.visit('/dashboard');
    cy.get('#control-3').click();
    cy.wait(2000);
    cy.get('#control-2').click();
    cy.wait(2000);
    cy.get('#control-1').click();
    cy.wait(2000);
  });

  it('Visit dashboard page navigation click controls carousel finclasses', () => {
    cy.visit('/dashboard');
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Right]').click()
    cy.wait(1000)
    cy.get('img[alt=Right]').click()
    cy.get('img[alt=Right]').click()
    cy.wait(1000)
    cy.get('img[alt=Left]').click()
    cy.get('img[alt=Left]').click()
    cy.wait(1000)
    cy.get('img[alt=Left]').click()
    cy.get('img[alt=Left]').click()
  });

});
