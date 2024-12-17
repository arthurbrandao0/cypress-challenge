
import LoginPage from '../../support/pageObjects/LoginPage';

describe('Teste de Login no Frontend', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Deve realizar login com sucesso', () => {
    LoginPage.fillEmail('arthurbm15@gmail.com');
    LoginPage.fillPassword('12345');
    LoginPage.submit();
    LoginPage.assertLoginSuccess();
  });

  it('Deve falhar com credenciais inválidas', () => {
    LoginPage.fillEmail('invalid@example.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submit();
    LoginPage.assertLoginFailure();
  });
});
