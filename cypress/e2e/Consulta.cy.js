describe.only('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
       
      //Login
      cy.visit('http://172.23.15.11:4200/login'); 

        cy.get('#mat-input-0').type('gestor@mail.com');
        cy.get('#mat-input-1').type('Admin@123');
        
        cy.contains('Login').click();

        // Verifica se foi redirecionado após login
        cy.url().should('not.include', '/login');
        cy.contains('Bem-vindo ao Portal Deps').should('be.visible');

        //Entrar na consulta
        cy.get(':nth-child(2) > .mdc-button__label').click();
        cy.get('.menu-item-online').click();

        //Consulta online
        cy.get('#documento').type('04377324000102');
        cy.get('select').select('MIX101 - Crédito: 1');
        cy.get('form.ng-dirty > button').click();
        cy.contains('Dados Públicos').should('be.visible');
        cy.contains('Portal da Transparência').should('be.visible');
        cy.wrap([...Array(5)]).each(() => {
          cy.get('.leaflet-control-zoom-in > span').click();
          cy.wait(750)
      });

    });
});

//Erro de consulta proposital
describe('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
       
      //Login
      cy.visit('http://172.23.15.11:4200/login'); 

        cy.get('#mat-input-0').type('gestor@mail.com');
        cy.get('#mat-input-1').type('Admin@123');
        
        cy.contains('Login').click();

        // Verifica se foi redirecionado após login
        cy.url().should('not.include', '/login');

        //Entrar na consulta
        cy.get(':nth-child(2) > .mdc-button__label').click();
        cy.get('.menu-item-online').click();

        //Consulta online
        cy.get('#documento').type('04377324000101');
        cy.get('select').select('MIX101 - Crédito: 1');
        cy.contains('Consultar').click();

        cy.contains('CNPJ inválido. Verifique o valor informado.').should('be.visible');
    });
});