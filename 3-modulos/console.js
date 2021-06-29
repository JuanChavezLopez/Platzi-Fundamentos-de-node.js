// console.warn('Algo');

var tabla = [
    {
        a:1,
        b:'z'
    },
    {
        a:2,
        b: 'Otra'
    }
]
console.table(tabla);

// !GROUP

console.group('Conversation');
    console.log('Hola');
        console.group('Bla');
        console.log('Blablaba.....');
        console.groupEnd('Bla');
console.groupEnd('Conversation');

// ! COUNT

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
