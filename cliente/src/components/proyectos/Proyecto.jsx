import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({proyecto}) => {

    const globalContext = useContext(proyectoContext)
    const globalTareaContext = useContext(tareaContext)


    //Funcion para agregar las tareas del proyecto actual
    const seleccionar_proyecto = () => {
        globalContext.seleccionarProyecto(proyecto.id)
        globalTareaContext.obtenerTareas(proyecto.id)
        
    }
    

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={seleccionar_proyecto}
            >{proyecto.nombre_proyecto}</button>
        </li>
    )
}

export default Proyecto