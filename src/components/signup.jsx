import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components';

import MailIcon from '../icons/mail';
import Input from './input'

import '../styles/signup.css'
import {Theme} from './context/theme-context'
import mail from '../icons/email_white_24dp (1).svg'



  

function SignUp(props){
    const [state, setState] = React.useState({
        email: "",
        password:""
      });
    const contextTheme = useContext(Theme);
    var theme = contextTheme.isDark ? contextTheme.dark : contextTheme.light;
    return(
        <div className="signup-container">
            <h2>Registrate</h2>
            <Input
                background={theme.backgroundCard}
                primary={theme.primary}
                
                secondary={theme.secondary}

                label="hora"
                type="text"
                value={state.password}
                onChange={val => setState({ ...state, password: val })}>
            </Input>
             <Input
                background={theme.backgroundCard}
                primary={theme.primary}
                
                secondary={theme.secondary}

                label="email"
                type="email"
                value={state.email}
                onChange={val => setState({ ...state, email: val })}>

            </Input>
        </div>

    );
}
export default SignUp;