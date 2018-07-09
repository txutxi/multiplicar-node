////requires
//const fs = require('fs');			//Propia de node
////const fs = require('express'); 	//Instalada no de node
////const fs = require('./mio');		//Creada por mi (dar el path)



const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');		//Creada por mi (dar el path)

let comando = argv._[0];
//console.log(`Base: ${argv.base} y limite: ${argv.limite}`);
console.log(argv);


switch (comando) {
	case 'listar':
		//console.log('Listar');
		//console.log(`Base: ${argv.base}, limite: ${argv.limite}`);
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		//console.log('Crear');
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
			.catch( e => console.log(e));
		
		break;
	default:
		console.log('Comando no reconocido');
}




//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(`PARA: ${parametro}`);
//console.log(`BASE: ${base}`);

//console.log(module);
//console.log(process);
//console.log(process.argv);

//crearArchivo(base)
//.then(archivo => console.log(`Archivo creado: ${archivo}`))
//.catch( e => console.log(e));