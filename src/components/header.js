import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
    const isMobile = contextUser.isMobile;

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
            <NavLink exact to="/" style={aStyle} activeClassName="act"><h3 className="title">UniWhat ?</h3></NavLink>
            <Menu/>
        </div>
        </>
    );
}
export default Head;