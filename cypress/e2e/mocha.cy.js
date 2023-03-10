//para agrupar casos de prueba
describe('Mocha', ()=>{

   //Caso de prueba
    it('primer test con mocha', ()=>{

        cy.log('Primer test');
        cy.log('Primer test');

    });

    it('segundo test', ()=>{
        cy.log('Primer test');

    });

    //Ejecutar solo esa prueba
    it.only ('cuarto test', ()=>{
        cy.log('Primer test');

    });

    it('quinto test', ()=>{
        cy.log('Primer test');

    })

    
})

// para omitir el caso de prueba
it.skip('tercero test', ()=>{
    cy.log('Primer test');

})