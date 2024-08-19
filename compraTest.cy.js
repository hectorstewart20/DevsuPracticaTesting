describe('Realizar Compra en Demoblaze', () => {
    let productos;

    before(() => {
      // Visita la página principal antes de cada prueba
      cy.visit('https://www.demoblaze.com');
      cy.fixture('productos').then((data) => {
        productos = data;
      });
    });

    it('Agregar dos productos al carrito y completar la compra', () => {
      /*const productos = [
        'Samsung galaxy s6',
        'Sony vaio i5'
      ];*/

      
       productos.forEach(item => {
        // Paso 1: Agregar N productos al carrito, segùn el archivo json
        cy.get('.card-title').contains(item.nombre).click(); 
        cy.get('.col-sm-12 > .btn').should('be.visible').click();
        cy.get('.active > .nav-link').click(); 
       }) ;
  
       //Paso 2: Valido el carrito ys sus productos fila por fila
      cy.get(':nth-child(4) > .nav-link').contains('Cart').click(); 
      cy.url().should('include', '/cart.html'); 
      productos.forEach(producto => {
        cy.contains('td', producto.nombre).should('exist'); 
      });

      cy.get('.btn.btn-success').should('be.visible').click(); 
      // Paso 3: Completo la compra llenando antes el formulario con los siguientes campos:
      cy.get('#name').type('Hector Gonzalez');
      cy.get('#country').type('Ecuador');
      cy.get('#city').type('Machala');
      cy.get('#card').type('1111222233334444');
      cy.get('#month').type('08');
      cy.get('#year').type('2024');
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
       
      // Paso 4: Verifico que la compra se haya completado
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.sweet-alert > h2').contains('Thank you for your purchase!'); 
      cy.get('.confirm').click();
      cy.visit('https://www.demoblaze.com');
    });
  });
  