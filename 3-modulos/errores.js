function otraFuncion(){
    return seRompe();
}

function seRompe() {
    return 3+ z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + a;
        } catch (err) {
            console.log('Error en mi funcion asincrona');
            cb(err); // este es un callback
        }
    })
}

try {
    // otraFuncion();
    seRompeAsincrona( function (err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Ha habido un error con alguna variable');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui esta al final');