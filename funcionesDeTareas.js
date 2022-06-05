const fs = require('fs');



    const leerJSON = () => {
        const tareasJSON = fs.readFileSync('./app-tareas/tareas.json', 'UTF-8');
        const funcionesDeTareas = JSON.parse(tareasJSON);
        return funcionesDeTareas
    }

    const listar = () => {
        let funcionesDeTareas = leerJSON();
        mostrarTareas(funcionesDeTareas);
    }

    const escribirJSON = (funcionesDeTareas) => {
        let funcionesDeTareasString = JSON.stringify(funcionesDeTareas, null, 1);
        fs.writeFileSync('./app-tareas/tareas.json', funcionesDeTareasString, 'UTF-8');
    }

    const guardarTarea = (funcionDeTarea) => {
        let funcionesDeTareas = leerJSON();
        funcionesDeTareas.push(funcionDeTarea);
        escribirJSON(funcionesDeTareas);
    }

    const filtrarPorEstado = (estado) => {
        let funcionesDeTareas = leerJSON();
        let tareasFiltradas = funcionesDeTareas.filter(funcionDeTarea => funcionDeTarea.estado === estado);
        mostrarTareas(tareasFiltradas)
    }

    const mostrarTareas = (funcionesDeTareas) => {
        funcionesDeTareas.forEach((funcionDeTarea, i) => {
            console.log(`(${i + 1}) ${funcionDeTarea.titulo} -> ${funcionDeTarea.
                estado}`);
        });
    }



    module.exports = {
        listar,
        guardarTarea,
        filtrarPorEstado,
        mostrarTareas
    }