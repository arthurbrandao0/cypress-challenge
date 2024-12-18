describe('Testes da API - Criação de Usuários', () => {
  it('Deve criar um usuário comum com sucesso', () => {
    cy.criarUsuario('QA Tester', `qa${Date.now()}@example.com`, '123456', 'false').then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve criar um usuário admin com sucesso', () => {
    cy.criarUsuario('QA Tester', `qa${Date.now()}@example.com`, '123456', 'true').then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });
});