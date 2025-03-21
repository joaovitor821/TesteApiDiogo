import { faker } from '@faker-js/faker';

describe('Teste de Login e Criação de Usuário', () => {
  
  it('Deve fazer login e criar um usuário várias vezes', () => {

    // Quantidade de testes que você quer fazer 
    Cypress._.times(10, () => { 

      // Realizando o login
      cy.visit('http://172.23.15.11:4200/login');
      cy.get('#mat-input-0').type('gestor@mail.com');  // Usuário de login
      cy.get('#mat-input-1').type('Admin@123');       // Senha de login
      cy.contains('Login').click();

      // Navegar para a seção de gerenciamento de usuários
      cy.get(':nth-child(4) > .mdc-button__label').click();
      cy.get('.menu-item-createrUser').click();

      // Gerando dados aleatórios para criar um login diferente para cada tentativa
      const nomeAleatorio = faker.name.firstName();  // Nome aleatório
      const emailAleatorio = faker.internet.email(); // Email aleatório

      cy.get('.mat-mdc-form-field.ng-tns-c508571215-8 > .mat-mdc-text-field-wrapper')
        .type(nomeAleatorio);
      cy.get('.mat-mdc-form-field.ng-tns-c508571215-9 > .mat-mdc-text-field-wrapper')
        .type(emailAleatorio);
      cy.get('#mat-input-4').type('Admin@123');

      cy.get('.mat-mdc-form-field-infix')
        .contains('Role')
        .parent()
        .click();
      cy.get('mat-option').contains('Usuário').click();
      cy.get('.mat-mdc-card-actions').click();

      // Verificando se a criação do usuário foi bem-sucedida
      cy.contains('Conta criada com sucesso!').should('be.visible');
    });
  });
});