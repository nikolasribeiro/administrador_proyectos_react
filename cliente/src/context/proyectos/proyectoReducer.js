/* eslint-disable import/no-anonymous-default-export */
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'


export default (state, action) => {
    
    switch(action.type){

        case FORMULARIO_PROYECTO:
            return {
                //Toma una copia del state
                ...state,
                formulario: true
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                lista_proyectos: action.payload
            }

        case AGREGAR_PROYECTOS:
            return {
                ...state,
                lista_proyectos: [...state.lista_proyectos, action.payload],
                formulario: false,
                error_formulario: false
            }

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                error_formulario: true
            }
        
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto_seleccionado: state.lista_proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                lista_proyectos: state.lista_proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto_seleccionado: null
            }

        default:
            return state
    }
}