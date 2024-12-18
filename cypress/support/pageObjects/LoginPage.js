class LoginPage {
  constructor() {
    this.selectors = {
      emailInput: 'input[name="email"]',
      passwordInput: 'input[name="password"]',
      submitButton: 'button[type="submit"]',
      errorMessage: 'Email e/ou senha inválidos',
    };
  }

  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get(this.selectors.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(this.selectors.passwordInput).clear().type(password, { parseSpecialCharSequences: false });
  }

  submit() {
    cy.get(this.selectors.submitButton).click();
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
    cy.contains(this.selectors.errorMessage).should('be.visible');
  }
}

export default new LoginPage();