import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({
        nombre:"",
        email:"",
        password:"",
        confirmar:""
    })

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere registrarse
    const onSubmit = (e) => {
        //Evitamos el recargado de la pagina por defecto
        e.preventDefault();

        // Validamos que no haya campos vacios

        // Validamos password minimo de 6 caracteres

        // Validamos que ambos passwords sean iguales

        // Pasamos al action
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre"
                            placeholder="Tu nombre"
                            onChange={onChange}
                            value={user.nombre}
                        />
                    </div>


                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={user.email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Contraseña"
                            onChange={onChange}
                            value={user.password}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar"
                            placeholder="Repite tu contraseña"
                            onChange={onChange}
                            value={user.confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" value="Registrarme" className="btn btn-primario btn-block"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">Iniciar Sesion</Link>
            </div>
        </div>
    );
}

export default Register;