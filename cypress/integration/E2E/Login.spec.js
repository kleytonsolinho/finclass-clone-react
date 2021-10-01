describe('Login Page', () => {

  it('Visit home page and click menu login', () => {
    cy.visit('/');
    cy.get('a[href*="/login"]').click()
  });

  it('Visit login page add login information click login', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('fake-user@email.com')
    cy.get('input[name=password]').type('123456')
    cy.get('button:first').click()
  });

  it('Visit login page and click register', () => {
    cy.visit('/login');
    cy.get('button:last').click()
  });

  it('Visit login page and click reset password', () => {
    cy.visit('/login');
    cy.get('a[href*="/"]').click()
    cy.visit('/login');
  });
});
