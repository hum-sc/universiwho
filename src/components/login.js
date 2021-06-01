import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import{getCurrentUser, setLogIn, signUp} from '../services/auth'
import Input from './input'
import '../styles/signup.css'
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'

import { Redirect } from 'react-router';
import Button from './button';

const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

function LogIn(){
    let usernow;
    const contextTheme = useContext(Theme)
    const contextUser = useContext(User)
    var theme = contextTheme.isDark ? contextTheme.dark:contextTheme.light;
    const [state, setState] = useState({
        email:"",
        password:""
    })
    const [error, setError] = useState({
        message:"",
        email:false,
        password:false
    });
    const logInHandler = (email,password)=>{
        setLogIn(email, password).then((user)=>{
            const actual = ()=>{
                contextUser.setLoged(true)
                contextUser.setUser(user.uid)
            };
            actual()
        }).catch((e)=>{
            if(e.code === "auth/invalid-email"){
                setError({message:"Correo invalido, verifica que lo escribiste bien", email:true})
            }else{
            }if(e.code === "auth/internal-error"){
                setError({message:"Verifica que los datos sean correctos", email:true, password:true})
            }else{
                if(e.code === "auth/wrong-password"){
                    setError({message:"Contraseña incorrecta", email:false, password:true})
                }else{
                    if(e.code === "auth/user-not-found"){
                        setError({message:"No se encontro un usuario asociado a ese correo", email:true, password:false})
                    }
                }
            }
        })

    }
    useEffect(()=>{
        setError({email:false, password:false, message:""})
    },[state.email, state.password])



    return(<div className='signup-container'>
        <h2>Inicia Sesion</h2>
        {contextUser.isLoged && <Redirect to="/"/>}
        <p style={{color : theme.error}}> {error.message} </p>
        <div className="form-container">
            <Input
            background={theme.backgroundCard}
            primary={theme.primary}
            secondary = {theme.secondary}
            ecolor = {theme.error}

            label="Correo electrónico"
            type="email"
            value={state.email}
            error={error.email}
            onChange={val=>setState({...state, email: val})}
            ></Input>
            <Input
             background={theme.backgroundCard}
             primary={theme.primary}
             secondary = {theme.secondary}
             ecolor = {theme.error}
 
             label="Contraseña"
             type="password"
             value={state.password}
             error={error.password}
             onChange={val=>setState({...state, password: val})}
            ></Input>
            <Button text="Iniciar Sesión" click={()=>logInHandler(state.email, state.password)}/>
        </div>
    </div>);
}
export default LogIn;