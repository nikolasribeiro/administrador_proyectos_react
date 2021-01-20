import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types'

const tareaReducer = (state, action) => {
    console.log("=== DEBUG ===");
    console.log("Esto es state: ", state);
    console.log("Esto es action: ", action);
    var proyecto_editado = state.tareas.map(tarea => tarea.id === action.payload.id ? console.log("tarea.id y action.payload.id son iguales: ", action.payload) : false);

    console.log("Esto es el proyecto_editado: ", proyecto_editado);

    switch(action.type){

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoID === action.payload)
            }

        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [ action.payload, ...state.tareas],
                errortarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
            }
        
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        
        
        default:
            return state
    }
}

export default tareaReducer