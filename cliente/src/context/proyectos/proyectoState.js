import React, {useReducer} from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {v4} from 'uuid'
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'


const ProyectoState = props => {

    const PROYECTOS_PRUEBA = [
        {id: 1, nombre_proyecto:"Tienda Virtual"},
        {id: 2, nombre_proyecto:"Intranet"},
        {id: 3, nombre_proyecto:"Diseño de sitio web"},
        {id: 4, nombre_proyecto:"MERN"}
    ]
    



    const initialState = {
        lista_proyectos: [],
        formulario : false,
        error_formulario: false,
        proyecto_seleccionado: null
    }
    
    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)
    
    // Serie de funciones para el CRUD (Create, Read, Update, Delete)
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: PROYECTOS_PRUEBA
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = v4()
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }
    
    
    // Validar formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    
    // Seleccionamos el proyecto actual
    const seleccionarProyecto = proyectoID => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoID
        })
    }
    
    //Eliminar un proyecto
    const eliminarProyecto = proyectoID => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoID
        })
    }
    
    return (
        <proyectoContext.Provider
            value={{
                lista_proyectos: state.lista_proyectos,
                formulario: state.formulario,
                error_formulario: state.error_formulario,
                proyecto_seleccionado: state.proyecto_seleccionado,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                seleccionarProyecto,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState