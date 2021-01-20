import React, {useReducer} from 'react'
import TareaContext from './tareaContext'
import tareaReducer from './tareaReducer'

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types'

const TareaState = props => {

    const initialState = {
        tareas: [
            {proyectoID: 1, id: 1,  nombre:'Elegir Plataforma 1',           estado: true},
            {proyectoID: 2, id: 2,  nombre:'Elegir Colores 2',              estado: false},
            {proyectoID: 3, id: 3,  nombre:'Elegir Plataforma de pago 3',   estado: false},
            {proyectoID: 4, id: 4,  nombre:'Elegir Hosting 4',              estado: true},
            {proyectoID: 1, id: 5,  nombre:'Elegir Plataforma 1',           estado: true},
            {proyectoID: 2, id: 6,  nombre:'Elegir Colores 2',              estado: false},
            {proyectoID: 3, id: 7,  nombre:'Elegir Plataforma de pago 3',   estado: false},
            {proyectoID: 4, id: 8,  nombre:'Elegir Hosting 4',              estado: true},
            {proyectoID: 2, id: 9,  nombre:'Elegir Plataforma 2',           estado: true},
            {proyectoID: 4, id: 10, nombre:'Elegir Colores 4',              estado: false},
            {proyectoID: 3, id: 11, nombre:'Elegir Plataforma de pago 3',   estado: false},
            {proyectoID: 1, id: 12, nombre:'Elegir Hosting 1',              estado: true},
            {proyectoID: 1, id: 13, nombre:'Elegir Nombre 1',               estado: true},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //Crea dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    // Obtenemos tareas de un proyecto
    const obtenerTareas = proyectoID => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoID
        })
    }

    // Añadimos una nueva tarea
    const nuevaTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea

        })
    }

    // Valida y muestra un error en caso necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por id
    const eliminarTarea = tareaID => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaID
        })
    }
    
    // Cambiamos el estado de una tarea
    const cambiarEstado = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Traemos la tarea actual
    const editarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Actualizamos una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas : state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea : state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                nuevaTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstado,
                editarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState