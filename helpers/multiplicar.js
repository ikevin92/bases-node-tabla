// manejador de archivos
const fs = require( 'fs' );
const colors = require( 'colors' );


const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

    try {
        let salida = '';
        let consola = '';

        const nombreArchivo = `tabla-${ base }.txt`;
        // console.log( nombreArchivo );

        for ( let i = 1; i <= hasta; i++ ) {
            consola += ( `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n` );
            salida += ( `${ base } x ${ i }  = ${ base * i }\n` );
        }

        if ( listar ) {
            console.log( '======================='.green );
            console.log( `    Tabla del: ${ colors.blue( base ) }   `.green );
            console.log( '======================='.green );
            console.log( consola );
        }

        fs.writeFileSync( `./salida/${ nombreArchivo }`, salida );

        // console.log( `${ nombreArchivo } creado` );

        return nombreArchivo;
    } catch ( error ) {
        throw error;
    }
};

// exportamos la funcion
module.exports = {
    crearArchivo
};