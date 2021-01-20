import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = (e) => {
        //Evitamos el recargado de la pagina por defecto
        e.preventDefault();

        //
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input type="submit" value="Iniciar Sesion" className="btn btn-primario btn-block"/>
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">Registar un nuevo usuario</Link>
            </div>
        </div>
    );
}

export default Login;