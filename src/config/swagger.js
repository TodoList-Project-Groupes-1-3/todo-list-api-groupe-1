const swaggerJSDoc = require('swagger-jsdoc');

/**
 * Options de configuration pour Swagger
 */
// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API ToDo List',
      version: '1.0.0',
      description: 'API de gestion de tâches et utilisateurs pour une application ToDo List',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Serveur de développement',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Chemins vers les routes où se trouvent les annotations Swagger
};

/**
 * Génération de la spécification Swagger
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;