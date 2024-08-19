/// <reference types="cypress" />

describe('Pruebas de Servicios REST de Registro y Login', () => {
  const baseUrl = 'https://api.demoblaze.com';

  beforeEach(() => {
  });

  it('Registrar un nuevo usuario', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: {
        username: 'nuevoUsuario2000',
        password: '1234'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      //expect(response.body).to.have.property('message', 'Sign up successful.');
    });
  });

  it('Debería mostrar error al intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: {
        username: 'nuevoUsuario2000',
        password: '1234'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage', 'This user already exist.');
    });
  });

  it('Login con usuario y contraseña correctos', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        username: 'nuevoUsuario2000',
        password: '1234'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      const responseBodyString = JSON.stringify(response.body);
      expect(responseBodyString).to.include('Auth_token');
    });
  });

  it('Mostrar error al hacer login con usuario y contraseña incorrectos', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        username: 'nuevoUsuario2000',
        password: '123'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage', 'Wrong password.');
    });
  });
});
