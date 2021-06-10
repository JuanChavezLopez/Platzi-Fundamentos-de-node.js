function hola(nombre) {
    console.log('Hola, soy una funcion asincrona!');
    console.log('En 1.5 segundos te saludare.');

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla bla....');
            resolve(nombre);
        });
    });
}

function adios(nombre){
    console.log('En 1 segundo me despedire.')
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios' , nombre);
            resolve();
        }, 1000);
    });
}

console.log('Iniciando el proceso');
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    })