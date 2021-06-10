function hola(nombre, miCallback) {
    console.log('Hola, soy una funcion asincrona!');
    console.log('En cuatro segundos te saludare.');

    setTimeout(function() {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 4000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla....');
        callbackHablar();
    });
}

function adios(nombre, otroCallback){
    console.log('En dos segundos me despedire.')
    setTimeout(function(){
        console.log('Adios' , nombre);
        otroCallback();
    }, 2000);
}


function conversacion(nombre, veces, callback) {

    if(veces > 0 ) {
        hablar( function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}
// !----------------------------------------------------------------------
console.log('Iniciando proceso.....!');

hola( 'Carlos', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

// !le pasamos un callback con variable nombre, a la funcion adios()
// hola('Juan', function (nombre) {

//     hablar(function () {
//         hablar( function() {
//             adios(nombre, function() {
//                 console.log('Terminando proceso....!');
//             })
//         });
//     });
// });
