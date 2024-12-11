# Urls
## Hello world:
localhost:3000
## Documentacion swagger:
localhost:3000/api-docs
# Run docker
docker run -it --rm -d -p 3000:3000 --name web byvoxel/websocket:latest

# Cómo funciona Socket.IO en esta aplicación

Socket.IO se utiliza para habilitar la comunicación en tiempo real entre el servidor y los clientes. Aquí hay un resumen de cómo funciona en esta aplicación:

1. **Configuración del servidor**: El servidor Express se configura y se integra con Socket.IO.
2. **Conexión del cliente**: Cuando un cliente se conecta, se emite un mensaje de bienvenida.
3. **Desconexión del cliente**: Se registra un mensaje en la consola cuando un cliente se desconecta.

El flujo de trabajo principal se encuentra en el archivo `index.js` y se describe a continuación:

- Cuando un cliente se conecta, se emite un mensaje "Hola Mundo".
- El cliente escucha este mensaje y lo muestra en la página HTML.
- Cuando el cliente se desconecta, se registra un mensaje en la consola del servidor.