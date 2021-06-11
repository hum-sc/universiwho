
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink} from 'react-router-dom';
import '../styles/header.css'

import ThemeButton from './theme';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import { setSignOut } from '../services/auth';
import {setSchool} from '../services/data';
import Input from './input'

import Plus from '../icons/plus';
import Hamburger from '../icons/hamburger';
import Close from '../icons/close';
import Button from './button';
import styled from 'styled-components';

const Div = styled.div`
    position:absolute;
    transition: .3s cubic-bezier(0.25, 0.1, 0, 0.93);
    transform: ${({ open }) => open ? "scale(0)" : 'scale(1)'};

`


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
    return (<div className={props.mobile ? "container-nav-mobile":"container-nav"} style={{backgroundColor : contextTheme.isMobile && theme.backgroundCard}}>
        <div className="nav-item">
                    <NavLink exact to="/howto" style={aStyle} activeClassName="act"> <p>HowTo</p></NavLink>
        </div>
        {isLoged ? (
        <>
            <div className="nav-item">
                <div  onClick={()=>props.addHandle()}> <Plus/> </div>
            </div>
            <div className="nav-item" onClick={()=>{signOutHandle()}}>SignOut</div>    
        </>):(
        <>
        <div className="nav-item">
            <NavLink exact to="/login" style={aStyle} activeClassName="act"> <p>LogIn</p></NavLink>
        </div>
        <div className="nav-item">
            <NavLink exact to="/signup" style={aStyle} activeClassName="act"> <p>SignUp</p></NavLink>
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
        cal:0,
        time:1,
    });
    const [isClicked, setClick]=useState(false);
    const [isAddClicked, setAddClick]=useState(false);
    const [isNew, setNew] = useState(false);

    const contextTheme = useContext(Theme);

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

    const uploadSchool = () =>{
        if(data.name !== "" && data.banner!=="" && data.cal !=null && data.profile!=="" && data.location !=="")
        {
            setError("")
            setSchool(data).then((dat)=>{
                window.open("./", "_self");
            }).catch((e)=>{
                setError(e);
            })
            
        }else{
            setError("Revisa que todos los campos esten llenos")
        }
    }
    useEffect(()=>{
        setClick(false);
    }, [isMobile])

    const bStyle = {
        color : theme.primary,
        backgroundColor: theme.backgroundCard,
    }
    return(<div style={bStyle} className="nav-container" >
        <div className="nav-item">
            <ThemeButton/>
        </div>
    {
        isMobile ?(<>
            <div style={{width:"24px", height:"24px", position:"relative"}} onClick={()=>{handleClick()}}>
                <Div open={isClicked}>
                <Hamburger/>
                </Div>
                <Div open={!isClicked}>
                <Close/>
                </Div>
                
            </div>
            <Div open={!isClicked}  onClick={()=>{handleClick()}} style={{position:"absolute", top:"64px", width:"100vw", left:0}}>
                <Type addHandle={()=>{addHandle()}} mobile={true}/>
            </Div>
                
        </>):  <>
                <Type addHandle={()=>addHandle()} mobile={false}/> </>
    }
    
        <Div open={!isAddClicked} style={{backgroundColor:theme.backgroundCard, top:"64px", position:"absolute"}} className="add-container">
            <div className="close-add" onClick={()=>addHandle()}>
                <Close/>
            </div>
            <p style={{color:theme.error}}>{error}</p>
            <h5 onClick={()=>handleNew()}>Añadir escuela</h5>
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
            onChange={val=>setData({...data, cal: parseInt(val)>10 ? 10 : parseInt(val)})}/>
            <Button text="Añadir" click={()=>{uploadSchool()}}/>
        </Div>

    
</div>)
}

export default Menu;