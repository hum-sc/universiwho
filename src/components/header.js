import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

import {Theme} from '../context/theme-context'



import Menu from './menu';

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
                backgroundColor :theme.backNav,
                color : theme.primary
            }
            } >
            <NavLink exact to="/" style={aStyle}>
                    <h3 style={{backgroundColor: theme.background, color:theme.primary}}className="title">
                        UniWhat ?
                    </h3>
            </NavLink>
            <Menu/>
        </div>
        </>
    );
}
export default Head;