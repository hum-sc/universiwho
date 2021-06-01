
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import { setSignOut } from '../services/auth';
import {setSchool, updateSchool} from '../services/data';
import Input from './input'

import Plus from '../icons/plus';
import Hamburger from '../icons/hamburger';
import Close from '../icons/close';
import Button from './button';
var isAddClicked;

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
    return (<div className={props.mobile ? "container-nav-mobile":"container-nav"} style={{ backgroundColor : contextTheme.isMobile ? theme.backgroundCard : theme.backgroundCard, boxShadow:theme.secondary}}>
        {isLoged ? (
        <>
            <div className="nav-item">
                <div onClick={()=>props.addHandle()}> <Plus/> </div>
            </div>
            <div className="nav-item" onClick={()=>{signOutHandle()}}>SignOut</div>    
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
    const [data, setData]=useState({
        name:"",
        profile:"",
        banner:"",
        location:"",
        web:"",
        cal:0
    });
    const [isClicked, setClick]=useState(false);
    const [isAddClicked, setAddClick]=useState(false);
    const [isNew, setNew] = useState(false);
    const [isUpdate, setUpdate] = useState(false);

    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);

    const isDark = contextTheme.isDark;
    const isMobile = contextTheme.isMobile;
    var theme = null;
    const [error, setError] = useState("")

    isDark ? theme = contextTheme.dark : theme = contextTheme.light;
    const handleClick = ()=>{
        setClick(!isClicked);
    }
    const addHandle = ()=>{
        setAddClick(!isAddClicked);
    }

    const handleNew = ()=>{
        setNew(!isNew);
    }

    const handleExperience = ()=>{
        setUpdate(!isUpdate)
    }

    const uploadSchool = () =>{
        if(data.name !== "" && data.banner!="" && data.cal !=null && data.profile!=="" && data.location !="")
        {
            setError("")
            setSchool(data).catch((e)=>{
                setError(e);
            })
            
        }else{
            setError("Revisa que todos los campos esten llenos")
        }
    }
    const uploadExperience = ()=>{
        
        if(data.name !== "" && data.cal !==0)
        {
            console.log(data)
            setError("");
            updateSchool({
                name: data.name,
                cal: data.cal
            })
            .then((response)=>{
                setUpdate(false);
                setNew(false)
            })
            .catch((e)=>{
                setError(e);
            })
            
        }else{
            setError("Revisa que todos los campos esten llenos")
        }
    }

    useEffect(()=>{
        setClick(false);
    }, [isMobile])
    return(<div className="nav-container" >
    <ThemeButton/>
    {
        isMobile ?(<>
            <div onClick={()=>{handleClick()}}>
                {!isClicked ? <Hamburger/>: <Close/>} 
            </div>
            {isClicked && <div onClick={()=>{handleClick()}}><Type addHandle={()=>{addHandle()}} mobile={true}/></div>}
        </>):<Type addHandle={()=>addHandle()} mobile={false}/> 
    }
    {isAddClicked && (<div style={{backgroundColor:theme.backgroundCard}} className="add-container">
        <div className="close-add" onClick={()=>addHandle()}>
            <Close/>
        </div>
        <a style={{color:theme.error}}>{error}</a>
        <h5 onClick={()=>handleNew()}>Añadir escuela</h5>
        {isNew && <>
        <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}

        label="Escuela"
        type="text"
        value={data.name}
        onChange={val=>setData({...data, name: val})}/>
        <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}

        label="Ubicación"
        type="text"
        value={data.location}
        onChange={val=>setData({...data, location: val})}/>
        <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}

        label="Website"
        type="text"
        value={data.web}
        onChange={val=>setData({...data, web: val})}/>
        <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}

        label="URL Imagen del Escudo"
        type="text"
        value={data.profile}
        onChange={val=>setData({...data, profile: val})}/>
        <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}

        label="URL Imagen del Banner"
        type="text"
        value={data.banner}
        onChange={val=>setData({...data, banner: val})}/>
       <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}
        label="Califica tu experiencia del 1-10"
        type="number"
        min="1" 
        max="10"
        value={data.cal}
        onChange={val=>setData({...data, cal: parseInt(val)})}/>
        <Button text="Añadir" click={()=>{uploadSchool()}}/>
        </>}
        <h5 onClick={()=>{handleExperience()}}>Califica tu experiencia</h5>
        {isUpdate && <>
            <Input
                background={theme.backgroundCard}
                primary={theme.primary}
                secondary = {theme.secondary}
                ecolor = {theme.error}

                label="Escuela"
                type="text"
                value={data.name}
                onChange={val=>setData({...data, name: val})}
            />
            <Input
        background={theme.backgroundCard}
        primary={theme.primary}
        secondary = {theme.secondary}
        ecolor = {theme.error}
        label="Califica tu experiencia del 1-10"
        type="number"
        min="1" 
        max="10"
        value={data.cal}
        onChange={val=>setData({...data, cal:parseInt(val)})}/>
        <Button text="Calificar" click={()=>{uploadExperience()}}
        />
        
            
        </>}
    </div>)}

    
</div>)
}

export default Menu;