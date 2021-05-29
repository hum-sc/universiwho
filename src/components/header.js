import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from './context/theme-context'
import {User} from './context/user-context'
import { setSignOut } from '../services/auth';


function Head (){
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User)
    const isDark = contextTheme.isDark;

    const isLoged = contextUser.isLoged;

    var theme = null;
    isDark ? theme = contextTheme.dark : theme = contextTheme.light;

    const aStyle = {
        color : theme.primary
    }
    const signOutHandle = ()=>{
        setSignOut();
        contextUser.setLoged(false)
        contextUser.setUser("")

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
                <div className="nav-item">
                    <NavLink exact to="/" style={aStyle} activeClassName="act"> Inicio </NavLink>
                </div>
                {isLoged ? <div onClick={()=>{signOutHandle()}}>SignOut</div>:(
                    <>
                    <div className="nav-item">
                        <NavLink exact to="/login" style={aStyle} activeClassName="act"> Log In </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink exact to="/signup" style={aStyle} activeClassName="act"> Sing Up </NavLink>
                    </div>
                    </>) }
            </div>
        </div>
        </>
    );
}
export default Head;