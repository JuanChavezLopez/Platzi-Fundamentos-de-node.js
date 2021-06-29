const fs = require('fs');

// !LEER

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    });
}

// leer(__dirname +'/archivo.txt', console.log);
// ! ESCRIBIR
function escribir( ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err){
        if(err) {
            console.log('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo 2', console.log);

// !BORRAR
function borrar (ruta, cb) {
    fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log);