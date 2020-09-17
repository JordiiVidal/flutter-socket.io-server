const { io } = require('../index');
//Mensja de sockets
//Client es el dispositivo conectado al serviodor
io.on('connection', client => {
    console.log('Conectado');
    client.on('disconnect', () => { console.log('Desconectado'); });
    client.on('mensaje', (payload) => {
        console.log('Mensaje emitido', payload);
        io.emit('mensaje', { nombre: 'Alerta' });
    });
});