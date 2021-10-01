describe('Register Page', () => {

  it('Visit home page and click menu register', () => {
    cy.visit('/');
    cy.get('a[href*="/register"]').click();
  });

  it('Visit register page add register information click login', () => {
    cy.visit('/register');
    cy.get('input[name=name]').type('Fake User Name');
    cy.get('input[name=lastname]').type('Fake User Lastname');
    cy.get('input[name=email]').type('fake-user@email.com');
    cy.get('input[name=phone]').type('11912345678');
    cy.get('button:last').click();
  });

  it('Visit register page and click menu links', () => {
    cy.visit('/register');
    cy.get('button:first').click();
    cy.visit('/register');
  });
});
