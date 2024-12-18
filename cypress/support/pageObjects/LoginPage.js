
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password, { parseSpecialCharSequences: false });
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/home');
  }

  assertLoginFailure() {
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  }
}

export default new LoginPage();
