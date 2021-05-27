import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from './context/theme-context'

function Head (){
    const contextTheme = useContext(Theme);
    const isDark = contextTheme.isDark;
    var theme = null;
    isDark ? theme = contextTheme.dark : theme = contextTheme.light;
    
    const aStyle = {
        color : theme.primary
    }


    return(
        <>
        <div className="container" style={
            {
                backgroundColor : theme.backgroundCard,
                color : theme.primary
            }
            } >
            <h3 className="title">UniverWhat ?</h3>
            <div className="nav-container" >
                <ThemeButton/>
                <a className="nav-item">
                    <Link to="/" style={aStyle}> Inicio </Link>
                </a>
                <a className="nav-item">
                    <Link to="/login" style={aStyle}> Log In </Link>
                </a>
                <a className="nav-item">
                    <Link to="/signup" style={aStyle}  > Sing Up </Link>
                </a>
            </div>
        </div>
        </>
    );
}
export default Head;