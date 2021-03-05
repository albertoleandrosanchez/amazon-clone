import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();

    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(
                (auth) => {
                        history.push('/')
                }
            )
            .catch(err => alert(err.mesaage))  
    };

    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(
            (auth) => {
                if(auth){
                    history.push('/')
                }
            }
        ).catch(err => alert(err.mesaage))  
    };
    
   

    return (
        <div className="login">
            <Link to="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" 
                    alt="amazon logo"
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Acceder a sesion</h1>

                <form >
                    <h5>Email</h5>
                    <input type="text" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Contraseña</h5>
                    <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <button 
                     onClick={signIn}
                     type='submit'
                    className="login__signInButton">Acceder</button>
                    
                    <p>
                        Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon Clone.
                    </p>
                </form>
                <button 
                onClick={register}
                className="login__registerButton">
                    Crear Cuenta
                </button>
            </div>

        </div>
    )
}

export default Login
