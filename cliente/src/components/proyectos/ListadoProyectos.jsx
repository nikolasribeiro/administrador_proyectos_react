import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoProyectos = () => {

    // Usamos el contexto global
    const globalContext = useContext(proyectoContext)

    // Llamamos a la funcion para cargar los proyectos, apenas se cargue el componente de listado
    useEffect(()=>{
        globalContext.obtenerProyectos()
    }, [])

    // Validamos si existen proyectos en el globalContext, si no existen, que no devuelva nada
    if(globalContext.lista_proyectos.length === 0) { return <p>No hay proyectos, comienza creando uno</p> }


    return (
        <ul className="listado-proyectos">
            {
                <TransitionGroup>
                    {globalContext.lista_proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={400}
                            classNames="proyecto"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
        </ul>
    )
}

export default ListadoProyectos