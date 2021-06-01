import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import {Redirect} from 'react-router'

import '../styles/signup.css'

import Input from './input'

import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'

import { searchUser, setUser } from '../services/data';
import{signUp} from '../services/auth'
import Button from './button';


const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
function SignUp(props){
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);
    var theme = contextTheme.isDark ? contextTheme.dark : contextTheme.light;
    const [state, setState] = useState({
        email:"",
        username:"",
        password:"",
        secondPassword:"",
        name:"",
    })
    const [error, setError] = useState({
        message:"",
        email:false,
        password:false,
        length:false,
        username:false,
    })
    const signUpHandler = (email, password) => {
        if(!error.email && !error.length && !error.password ){
            searchUser(state.username).then((user)=>{
                setError({message:"El username ya existe, escoge otro", username:true})
            })
            .catch((e)=>{
                setError({username:false, message:""})
                signUp(email, password).then((user) => {
                    
                    setUser( {
                        username:state.username,
                        name:state.name,
                    } ,user.uid).then((response)=>{
                        contextUser.setLoged(true);
                        contextUser.setUser(response.id);
                    })
                })
                .catch((e)=>{
                    if(e.code === "auth/invalid-email"){
                        setError({message:"Correo invalido, verifica que lo escribiste bien", email:true})
                    }else if(e.code === "auth/email-already-in-use"){
                        setError({message:"Ya se ha creado una cuenta con ese correo", email:true})
                    }
                    
                })
            })
        } 
    }
    useEffect(() => {
        if (re.exec(state.email)){
            setError({
                email:false,
                message:""
            })
            if( 0 < state.password.length && state.password.length< 8){
                setError({
                    message:"Contraseña demasiado corta",
                    length:true
                })
            }else{
                setError({
                    message:"",
                    length:false
                })
                if(state.secondPassword!==""){
                    if (state.secondPassword!==state.password){
                        setError({
                            message:"Las contraseñas no son iguales",
                            password:true
                        })
                    }else {
                        setError({
                            message:"",
                            password:false
                        })
                    }
                }
            }
           
        } else {
           state.email!=="" && setError({
               email:true,
               message:"Introduce un correo valido"
           })
        }
        
    }, [state.password, state.secondPassword, state.email])
    return(
        <div className="signup-container">
            {contextUser.isLoged && <Redirect to="/"/>}
            <h2>Registrate</h2>
            <p style={{color : theme.error}}> {error.message} </p>
            <div className="form-container">
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    secondary={theme.secondary}
                    ecolor={theme.error}

                    label="Correo electrónico"
                    type="email"
                    value={state.email}
                    error={error.email}
                    onChange={val =>  setState({ ...state, email: val })}>

                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    secondary={theme.secondary}
                    ecolor={theme.error}
                    error={error.username}

                    label="UserName"
                    type="text"
                    value={state.username}
                    onChange={val =>  setState({ ...state, username: val })}>

                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    secondary={theme.secondary}

                    label="Nombre"
                    type="text"
                    value={state.name}
                    onChange={val =>  setState({ ...state, name: val })}>
                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    secondary={theme.secondary}
                    ecolor={theme.error}

                    label="Contraseña"
                    type="password"
                    value={state.password}
                    error={error.length}
                    onChange={val => setState({ ...state, password: val })}>
                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    secondary={theme.secondary}
                    ecolor={theme.error}

                    label="Verifica la contraseña"
                    type="password"
                    value={state.secondPassword}
                    error={error.password}
                    onChange={val => setState({ ...state, secondPassword: val })}>
                </Input>
                <Button text="Registrarme" click={()=>signUpHandler(state.email, state.password)}/>
                
            </div>
        </div>

    );
}
export default SignUp;