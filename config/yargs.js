

const argv = require( 'yargs' )
    .options( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true, // exigimos el argumento
        describe: 'base de la tabla de multiplicar'
    } )
    .options( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero hasta donde quieres la tabla'
    } )
    .options( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla en consola'
    } )
    .check( ( argv, options ) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un numero';
        }

        return true;

    } )
    .argv;



// exportamos la funcion
module.exports = argv;