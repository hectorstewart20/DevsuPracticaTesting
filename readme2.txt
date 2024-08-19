#  Pruebas de APis con Cypress para Demoblaze

Este proyecto contiene pruebas de algunos APIs de registro y login usando Cypress [www.demoblaze.com](https://www.demoblaze.com). 
A continuación se explica cómo configurar y ejecutar las pruebas.

## Requisitos

- **Node.js y npm**: Cypress se instala a través de npm, por lo que necesitas tener Node.js y npm instalados en tu sistema. 
Puedes descargarlos desde [Node.js](https://nodejs.org/).

- **Cypress**: Si no tienes Cypress instalado globalmente, sigue las instrucciones en la sección de instalación.

## Instalación y Configuración

1. **Clona el Repositorio**:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_DIRECTORIO>


Ejecución de Pruebas
Para ejecutar las pruebas en modo headless (sin interfaz gráfica), usa el siguiente comando:

npx cypress run
Para ejecutar las pruebas en modo interactivo (con interfaz gráfica), usa:

npx cypress open
En el modo interactivo, selecciona el archivo de prueba (compraTest.cy.js) desde la interfaz para ejecutarlo.