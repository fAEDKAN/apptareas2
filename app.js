const {argv} = require('process');

const listado = argv[2];

const {listar, guardarTarea, filtrarPorEstado} = require('./funcionesDeTareas');


switch (listado) {
    case 'listar':
        listar()
        break;

    case 'crear':
        let nuevaTarea = {
            titulo : argv[3],
            estado : 'pendiente',
        }
        guardarTarea(nuevaTarea);
        console.log('La tarea ha sido guardada.');
        break;

    case 'filtrar':
        filtrarPorEstado(argv[3])
        break;

    case undefined:
        console.log('¡Atención! - Tenés que introducir una acción.');
        break;

    default:
        console.log('No entiendo qué querés hacer.');
}