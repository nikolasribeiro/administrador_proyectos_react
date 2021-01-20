import React, {useContext} from 'react'
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({tarea}) => {

    //Global context para tareas
    const globalTareaContext = useContext(tareaContext)

    //Global context
    const globalContext = useContext(proyectoContext)

    // Eliminamos una tarea
    const onClickEliminarBtn = tareaID => {
        var confirm = window.confirm(`Estas seguro que deseas eliminar la tarea: ${tarea.nombre}?`)
        if(confirm){
            globalTareaContext.eliminarTarea(tareaID)
            globalTareaContext.obtenerTareas(globalContext.proyecto_seleccionado[0].id)
        }
    }

    // Editamos una tarea
    const handleEditarTarea = tarea => {
        globalTareaContext.editarTareaActual(tarea)
    }


    //Cambiamos el estado de una tarea
    const handleChangeEstado = tarea =>{
        // Checkeamos si el estado de tarea es true, para cambiarlo a false y viceversa
        if(tarea.estado){
            tarea.estado = false
        }else{
            tarea.estado = true
        }
        globalTareaContext.cambiarEstado(tarea)

    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado 
                    ? (
                        <button 
                            className="completo"
                            type="button"
                            onClick={() => handleChangeEstado(tarea)}
                        >Completo</button>
                    )
                    : (
                        <button 
                            className="incompleto"
                            type="button"
                            onClick={() => handleChangeEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => handleEditarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => onClickEliminarBtn(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Tarea