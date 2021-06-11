import React, { useContext, useEffect, useState} from 'react';
import styled from 'styled-components'

import {updateSchool} from '../services/data'

import '../styles/card.css'

import Location from './location'
import Rating from './rating.jsx'

import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import { getSchools } from '../services/data';
import Input from './input'
import Button from './button';
import Close from '../icons/close'
const Div = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    transition: .3s cubic-bezier(0.25, 0.1, 0, 0.93);
    z-index:100;
    height:100%;
    width:calc(100% - 20px);
    padding: 0px 10px;
    top:0;
    left:0;
    background-color:${({back})=>back};
    transform: ${({ open }) => open ? "scale(1)" : 'scale(0)'};

`

function Item (props) {
    const [isUpdate, setUpdate] = useState(false);
    const [data, setData] = useState({
        name:props.name,
        cal:0,
    })

    const contextTheme = useContext(Theme);
    const user = useContext(User);
    const isDark = contextTheme.isDark;
    var theme = null;
    theme = isDark ? contextTheme.dark : contextTheme.light;
    const handleGrade=()=>{
        setUpdate(!isUpdate)
    }
    const aStyle = {
        color : theme.primary,
        fontSize:"14px",
        margin:0,
    }

    const uploadExperience = ()=>{
        
        if(data.cal !==0)
        {
            console.log(data)
            updateSchool({
                name: data.name,
                cal: data.cal
            })
            .then((response)=>{
                setUpdate(false);
                window.open("./", "_self")
            })
            .catch((e)=>{
            })
        }else{
            console.log("es 0")
        }
    }
    return(<>
        <div
            
            id={props.name}
            className='card'
            style={{backgroundColor : theme.backgroundCard}} 
        >
            <img className='banner' src={props.banner} alt='banner'/>
            <div className='info' onClick={()=>handleGrade()}>
                <div className='location'>
                    <Location location={props.location} color="white" secondary="white"/>
                </div>
                <img className='profile-image' alt={props.name+' logo'} src={props.profile}  style={{borderColor : theme.backgroundCard}}/>
                <h4>{props.name}</h4>
            </div>
            <div className='grade'>
                <div className='item-grade' >
                    <Rating cal={props.cal}/>
                </div>
            </div>
            {user.isLoged && <Div
                back={theme.backgroundCard}
                open={isUpdate}>
                <div className="close-add" onClick={()=>handleGrade()}>
                    <Close/>
                </div>
                <a style={aStyle} href={props.web}>Sitio web</a>
                <h5 style={{margin:0}}>Califica a {props.name} del 1 al 10</h5>
                <Input
                background={theme.backgroundCard}
                primary={theme.primary}
                secondary = {theme.secondary}
                ecolor = {theme.error}
                label="Calificacion"
                type="number"
                max="10"
                min="1"
                value={data.cal}
                onChange={val=>setData({...data, cal: parseInt(val)>10 ? 10 : parseInt(val)})}/>
                <Button text="Calificar" click={()=>{uploadExperience()}}/>
            </Div>}
        </div>
    </>);
}



function Schools () {
    const [schools, setSchools] = useState([])
    useEffect(()=>{
        getSchools().then(async (data)=>{
            setSchools(data);
        }).catch((e)=>{
            console.log(e);
        })
    },[]);

    const items = schools.map((data)=>
        <Item 
            banner={data.banner} 
            location={data.location} 
            name={data.name}
            key={data.name}
            profile={data.profile}
            web={data.web}
            cal={data.cal}
            /* banner={data.banner} 
            location={data.location} 
            name={data.name}
            key={data.name}
            profile={data.profile}
            grade={data.cal}     
            web={data.web}
            cal={data.cal} */
        />
    );
    return(<>
    <h2 className="h2-schools">Nosotros te damos la informacion</h2>
    <p className="p-schools">No decidas al azar</p>
    <div className="schools-container">
    {items}
    </div>
    </>);
}

export default Schools;