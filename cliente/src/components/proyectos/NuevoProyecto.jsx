import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

    // Llamamos al context global
    const globalContext = useContext(proyectoContext)


    //State para proyecto
    const [proyecto, setProyecto] = useState({
        nombre_proyecto:""
    })


    // Capturamos el valor del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onClickFormulario = () => {
        globalContext.mostrarFormulario()
    }

    // Funcion que se ejecuta al momento de hacer clic en Agregar Proyecto
    const onSubmitProyecto = e => {
        e.preventDefault()

        //Validar el proyecto
        if(proyecto.nombre_proyecto === ""){
            globalContext.mostrarError()
            return
        }
        // Agregar al state
        globalContext.agregarProyecto(proyecto)

        //Reiniciar el form
        setProyecto({
            nombre_proyecto:""
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo proyecto
            </button>

            {
                globalContext.formulario 
                ? (
                    <form 
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text" 
                            name="nombre_proyecto" 
                            id="nombre_proyecto" 
                            className="input-text"
                            onChange={onChangeProyecto}
                            value={proyecto.nombre_proyecto}
                        />

                        <input 
                            type="submit" 
                            value="Agregar Proyecto"
                            className="btn btn-primario btn-block"
                        />
                    </form>
                )
                : null
            }

            {
                globalContext.error_formulario 
                ? (<p className="mensaje error">El nombre del proyecto es obligatorio</p>)
                : null
            }
        </Fragment>
    );
}

export default NuevoProyecto;