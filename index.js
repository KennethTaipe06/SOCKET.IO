const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración de Swagger para la documentación de la API
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Socket.IO API',
      version: '1.0.0',
      description: 'API documentation for the Socket.IO application',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     description: Serve the index.html file
 *     responses:
 *       200:
 *         description: HTML file
 */
// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('a user connected'); // Mensaje en consola cuando un usuario se conecta

  // Emitir un mensaje al cliente cuando se conecta
  socket.emit('message', 'Hola Mundo');

  // Manejo de la desconexión del cliente
  socket.on('disconnect', () => {
    console.log('user disconnected'); // Mensaje en consola cuando un usuario se desconecta
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('listening on *:3000');
});