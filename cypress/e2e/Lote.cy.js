describe('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
       
      //Login
      cy.visit('http://172.23.15.11:4200/login'); 

        cy.get('#mat-input-0').type('gestor@mail.com');
        cy.get('#mat-input-1').type('Admin@123');
        
        cy.contains('Login').click();

        // Verifica se foi redirecionado após login
        cy.url().should('not.include', '/login');

        //Entrar em lote
        cy.get(':nth-child(2) > .mdc-button__label').click();
        cy.get('.menu-item-lote').click();

        //Consulta lote
        cy.get('mat-label.ng-tns-c508571215-8').click(); 
        cy.contains('MIX101 - Crédito: 1').click(); 
        cy.get('input[type="file"]').attachFile('326.csv');
        cy.get('[ng-reflect-ng-class="[object Object]"] > .mdc-button__label').click()        
    });
});