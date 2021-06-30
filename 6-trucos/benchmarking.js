console.time('todo');

    let suma = 0;
    console.time('bucle');
        for(let i=0; i<1000000; i++){
            suma+= 1;
        }
    console.timeEnd('bucle');

    // suma2 = 0;
    // console.time('bucle2');
    //     for(let j=0; j<1000; j++){
    //         suma2+= 1;
    //     }
    // console.timeEnd('bucle2');
    console.time('asincrono');
    console.log('Empieza el proceso asincrono');
    asincrona()
        .then(()=>{
            console.timeEnd('asincrono');
        });

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function()  {
            console.log('termina el proceso asincrono');
            resolve();
        });
    })
}