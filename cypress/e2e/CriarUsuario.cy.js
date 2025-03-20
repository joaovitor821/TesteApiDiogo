describe('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
       
      //Login
      cy.visit('http://172.23.15.11:4200/login'); 

        cy.get('#mat-input-0').type('gestor@mail.com');
        cy.get('#mat-input-1').type('Admin@123');
        
        cy.contains('Login').click();

        // Verifica se foi redirecionado após login
        cy.url().should('not.include', '/login');

        //Entrar em gerenciamento de usuario 
        cy.get(':nth-child(4) > .mdc-button__label').click();
        cy.get('.menu-item-createrUser').click();

        //Criação de conta
        cy.get('.mat-mdc-form-field.ng-tns-c508571215-8 > .mat-mdc-text-field-wrapper').type('Tsete2');
        cy.get('.mat-mdc-form-field.ng-tns-c508571215-9 > .mat-mdc-text-field-wrapper').type('batatinhafrita123@mail.com');
        cy.get('.mat-mdc-form-field.ng-tns-c508571215-10 > .mat-mdc-text-field-wrapper').type('Admin@123');
        cy.get('.mat-mdc-form-field-infix')
        .contains('Role')
        .parent()
        .click();
        cy.get('mat-option').contains('Usuário').click()
        cy.get('.mat-mdc-card-actions').click();
    });
});