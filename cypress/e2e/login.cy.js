describe('Teste de Login', () => {
    it('Deve fazer login com credenciais válidas', () => {
       
      //Login
      cy.visit('http://172.23.15.11:4200/login'); 

        cy.get('#mat-input-0').type('gestor@mail.com');
        cy.get('#mat-input-1').type('Admin@123');
        
        cy.contains('Login').click();

        // Verifica se foi redirecionado após login
        cy.url().should('not.include', '/login');

    });

    it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
        cy.visit('http://172.23.15.11:4200/login');

        cy.get('#mat-input-0').type('email@invalido.com');
        cy.get('#mat-input-1').type('senhaerrada');
        
        cy.contains('Login').click();

        // Verifica se aparece uma mensagem de erro
        cy.contains('Credenciais inválidas').should('be.visible');
    });
});
