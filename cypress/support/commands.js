Cypress.Commands.add('criarUsuario', (nome, email, password, administrador) => {
  return cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
    nome,
    email,
    password,
    administrador,
  });
});