import React, {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import {v4} from 'uuid'

const FormTarea = () => {

    // Global Context para utilizar proyecto_seleccionado
    const globalContext = useContext(proyectoContext)
    const globalTareaContext = useContext(tareaContext)


    // Local state para trabajar con el input
    const [tarea, setTarea] = useState({
        nombre: ""
    })

    // Use effect que detecta si existe una tarea seleccionada para editar
    useEffect(()=>{
        // Handle Editar Tarea
        if(globalTareaContext.tareaseleccionada !== null){

            setTarea({
                nombre: globalTareaContext.tareaseleccionada.nombre
            })
        }
    }, [globalTareaContext.tareaseleccionada])

    // Si no hay proyecto seleccionado
    if(!globalContext.proyecto_seleccionado){
        return null
    }

    // Array destructuring para el proyecto seleccionado
    const [proyecto_actual] = globalContext.proyecto_seleccionado

    // Capturamos lo que el usuario escriba en el input
    const onChangeInput = (e) => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario le da al boton Agregar Tarea
    const handleSubmit = e => {
        // Prevent Default
        e.preventDefault()

        // Validamos si el usuario escribio algo en el input
        if(tarea.nombre.trim() === ""){
            globalTareaContext.validarTarea()
            return
        }

        // Validamos si es edicion o si es nueva tarea
        if(globalTareaContext.tareaseleccionada === null){
            // Si la tarea es valida, añadimos
            tarea.proyectoID = proyecto_actual.id
            tarea.estado = false
            tarea.id = v4()
            globalTareaContext.nuevaTarea(tarea)

        }else{
            console.log("Entro en el bloque de actualizar tarea");
            globalTareaContext.actualizarTarea(tarea)
        }

        // Obtener y filtrar las tareas del proyecto actual
        globalTareaContext.obtenerTareas(proyecto_actual.id)      

        // Reiniciamos el form a su estado inicial
        setTarea({
            nombre:""
        })
    }

    

    return (
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                {globalTareaContext.errortarea ? (<p className="mensaje error">El nombre de la tarea es obligatorio</p>) : null}
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        className="input-text"
                        placeholder="Nombre de tarea..."
                        onChange={onChangeInput}
                        value={tarea.nombre}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value={globalTareaContext.tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"} 
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>

            </form>
        </div>
    )
}

export default FormTarea