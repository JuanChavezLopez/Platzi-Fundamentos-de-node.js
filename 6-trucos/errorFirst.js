

function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        }catch(e){
            callback(e);
        }
    }, 1000);
}


// try{
    asincrona(function(err, dato) {
        if(err) {
            console.error('Tenemos un error');
            console.error(err);
            return false;
            // throw err;
        }
    
        console.log('Todo ha ido bien, mi data es', dato);
    });
// } catch (e){
//     console.log('Hemos capturado un error');
//     console.error(e);
// }