
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import { setSignOut } from '../services/auth';

import Plus from '../icons/plus';
import Hamburger from '../icons/hamburger';

function Type (props){
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);

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
    const addHandle = ()=>{
        console.log("add")
    }
    return (<div className={props.mobile ? "container-nav-mobile":"container-nav"}>
        {isLoged ? (
        <>
            <div className="nav-item">
                <div onClick={()=>{addHandle()}}> <Plus/> </div>
            </div>
            <div onClick={()=>{signOutHandle()}}>SignOut</div>    
        </>):(
        <>
        <div className="nav-item">
            <NavLink exact to="/login" style={aStyle} activeClassName="act"> Log In </NavLink>
        </div>
        <div className="nav-item">
            <NavLink exact to="/signup" style={aStyle} activeClassName="act"> Sing Up </NavLink>
        </div>
        </>)}
    </div>);
}

function Menu (){
    const [isClicked, setClick]=useState(false);
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);

    const isDark = contextTheme.isDark;
    const isMobile = contextTheme.isMobile;
    var theme = null;

    isDark ? theme = contextTheme.dark : theme = contextTheme.light;

    const signOutHandle = ()=>{
        setSignOut();
        contextUser.setLoged(false)
        contextUser.setUser("")

    }
    const handleClick = ()=>{
        setClick(!isClicked);
    }
    useEffect(()=>{
        setClick(false);
    }, [isMobile])
    return(<div className="nav-container" >
    <ThemeButton/>
    {
        isMobile ?(<>
            <div onClick={()=>{handleClick()}}>
                <Hamburger/>
            </div>
            {isClicked && <Type mobile={true}/>}
        </>):<Type mobile={false}/>
    }
    
</div>)
}

export default Menu;