// const process = require('process');


process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});
process.on('exit', () => {
    console.log('El proceso ha acabado');
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error('Estamos capturando el error');
    console.error(err);
});

ejecutandoFuncionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');