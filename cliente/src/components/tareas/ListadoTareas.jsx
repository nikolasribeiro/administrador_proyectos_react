import React, {Fragment, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import TareaContext from '../../context/tareas/tareaContext'
import Tarea from './Tarea'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoTareas = () => {

    // Global Context para utilizar proyecto_seleccionado
    const globalContext = useContext(proyectoContext)
    const globalTareaContext = useContext(TareaContext)


    // Si no hay proyecto seleccionado
    if(!globalContext.proyecto_seleccionado){
        return <h2>Selecciona un proyecto</h2>
    }

    // Array destructuring para el proyecto seleccionado
    const [proyecto_actual] = globalContext.proyecto_seleccionado

    // Elimina un proyecto
    const onClickEliminar = () => {
        var confirm = window.confirm(`Estas seguro que deseas eliminar el proyecto: ${proyecto_actual.nombre_proyecto}?`)
        if(confirm){
            globalContext.eliminarProyecto(proyecto_actual.id)
        }
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyecto_actual.nombre_proyecto}</h2>
            <ul className="listado-tareas">
                {globalTareaContext.tareasproyecto.length === 0
                ? (<li className="tarea"><p>No hay Tareas</p></li>)
                : 
                <TransitionGroup>
                    {   
                        globalTareaContext.tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea tarea={tarea} />
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas