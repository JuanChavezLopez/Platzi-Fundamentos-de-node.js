async function hola(nombre) {
    console.log('Hola, soy una funcion asincrona!');
    console.log('En 1.5 segundos te saludare.');

    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla bla....');
            resolve('Hay un error');
        }, 1000);
    });
}

async function adios(nombre){
    console.log('En 1 segundo me despedire.')
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios' , nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Empezemos el proceso');
main();
console.log('Va a ser la segunda instruccion')