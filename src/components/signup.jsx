import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components';

import{signUp} from '../services/auth'

import MailIcon from '../icons/mail';
import Input from './input'

import '../styles/signup.css'
import {Theme} from './context/theme-context'
import mail from '../icons/email_white_24dp (1).svg'


function SignUp(props){
    const [state, setState] = React.useState({
        email: "",
        password:"",
        vPassword:"",
        //form
        errorLength:"",
        errorPass:"",
        errorEmail:"",
        //firebase
        errorMessage:"",
        errorCode:""
      });

      const onSignUp=(email, password)=>{
          var response = "";
          response=signUp(email,password)
          if(response.errorCode !== null && response.errorMessage!==null ){
              setState({
                  errorCode:response.errorCode, 
                  errorMessage:response.errorMessage
                })
          }else {
          }
      }
    const contextTheme = useContext(Theme);
    var theme = contextTheme.isDark ? contextTheme.dark : contextTheme.light;
    return(
        <div className="signup-container">
            <h2>Registrate</h2>
            <a> {state.errorCode} </a>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    
                    secondary={theme.secondary}


                    label="email"
                    type="email"
                    value={state.email}
                    error={state.errorEmail}
                    onChange={val => setState({ ...state, email: val })}>

                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    
                    secondary={theme.secondary}

                    label="Contraseña"
                    type="password"
                    value={state.password}
                    error={state.errorLength}
                    onChange={val => {setState({ ...state, password: val });}}>
                </Input>
                <Input
                    background={theme.backgroundCard}
                    primary={theme.primary}
                    
                    secondary={theme.secondary}

                    label="Verifica la contraseña"
                    type="password"
                    value={state.vPassword}
                    error={state.errorPass}
                    onChange={val => setState({ ...state, vPassword: val })}>
                </Input>
                <button onClick={()=>onSignUp(state.email,state.password)}>Registrarme</button>
        </div>

    );
}
export default SignUp;