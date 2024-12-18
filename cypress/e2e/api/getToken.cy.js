import credentials from '../../fixtures/credentials.json';

describe('Testes da API - Obtenção de token pós autenticação', () => {
  it('Deve realizar login e obter token', () => {
    const { email, password } = credentials.validUser;
    cy.request('POST', `${Cypress.env('apiUrl')}/login`, {
      email: email,
      password: password
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
      cy.log(response.body.authorization);
    });
  });
});
