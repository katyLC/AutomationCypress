
///    <refrence types='cypress'/>
describe('Primer test',()=>{
    it('Deberia registrarse satisfactoriamente', ()=>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type('Pushint')
        cy.get('#pass').type('Sistemas.123')
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select('4');
        cy.get('#month').select('April');
        cy.get('#year').select(70);
        cy.get('#submitform').click();
        
    })
})