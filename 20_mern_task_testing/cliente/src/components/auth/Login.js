import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
import Alerta from '../layout/Alerta';

const Login = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { msg, autenticado, iniciarSesion } = authContext;

      // En caso de que el password o usuario no exista
      useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(msg) {
            mostrarAlerta(msg.msg, msg.categoria);
        }
        // eslint-disable-next-line
    }, [msg, autenticado, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Pasarlo al action
        iniciarSesion({ email, password });
    }



    return ( 
        <div className="form-usuario">
            <Alerta
                alerta={alerta}
            />
            <div className="contenedor-form sombra-dark">
                <h1 data-cy="titulo">Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                    data-cy="form-login"
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            data-cy="email-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            data-cy="password-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            data-cy="submit-login"
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Iniciar Sesión" />
                    </div>
                </form>

                <Link 
                    data-cy="nueva-cuenta"
                    to={'/nueva-cuenta'}
                    className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;