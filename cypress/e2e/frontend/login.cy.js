import LoginPage from '../../support/pageObjects/LoginPage';
import credentials from '../../fixtures/credentials.json';

describe('Teste de Login no Frontend', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Deve realizar login com sucesso', () => {
        const { email, password } = credentials.validUser;
        LoginPage.login(email, password);
        LoginPage.assertLoginSuccess();
    });

    it('Deve realizar login com sucesso utilizando senha longa e caracteres especiais', () => {
        const { email, password } = credentials.specialCharacterUser;
        LoginPage.login(email, password);
        LoginPage.assertLoginSuccess();
    });

    it('Deve falhar com credenciais inválidas', () => {
        const { email, password } = credentials.invalidUser;
        LoginPage.login(email, password);
        LoginPage.assertLoginFailure();
    });
});
