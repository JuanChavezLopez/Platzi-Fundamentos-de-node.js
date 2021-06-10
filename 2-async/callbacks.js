function hola(nombre, miCallback) {
    console.log('Hola, soy una funcion asincrona!');
    console.log('En cuatro segundos te saludare.');

    setTimeout(function() {
        console.log('Hola, '+ nombre);
        miCallback(nombre);
    }, 4000)
}

function adios(nombre, otroCallback){
    console.log('En dos segundos me despedire.')
    setTimeout(function(){
        console.log('Adios' , nombre);
        otroCallback();
    }, 2000);
}

console.log('Iniciando proceso.....!');



// !le pasamos un callback con variable nombre, a la funcion adios()
hola('Juan', function (nombre) {

    adios(nombre, function() {
        console.log('Terminando proceso....!');
        
    });
});
