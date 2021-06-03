import React from 'react';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import { setSignOut } from '../services/auth';
import Plus from '../icons/plus';
import Menu from './menu';

function Head (){
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User)
    const isDark = contextTheme.isDark;
    const path= useLocation().pathname;

    var theme = null;
    var op = null;
    isDark ? theme = contextTheme.dark : theme = contextTheme.light;
    isDark? op = contextTheme.light :op = contextTheme.dark

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