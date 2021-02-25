const { crearArchivo } = require( './helpers/multiplicar' );
const argv = require( './config/yargs' );
require( 'colors' );


// option('l')
// listar
// boolean
// default: false

console.clear();

// console.log( argv );
// console.log( 'base: yargs', argv.base );

// creamos el archivo
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ) )
    .catch( ( err ) => console.log( err ) );

