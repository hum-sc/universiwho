import React, { useContext, useEffect, useState} from 'react';

import Data from '../files/data.json';

import '../styles/card.css'

import Location from './location'
import Rating from './rating.jsx'

import pruebaIMG from '../images/rectoriaUAEM.jpg'
import profileIMG from '../images/uaem.png'

import {Theme} from '../context/theme-context'
import { getSchools } from '../services/data';
import { setDoc } from '@firebase/firestore';




const dataSchools = Data[0].schools;


function Item (props) {
    const contextTheme = useContext(Theme);
    const isDark = contextTheme.isDark;
    var theme = null;
    theme = isDark ? contextTheme.dark : contextTheme.light;


    return(
    <div
        onClick={()=> window.open(props.web, "_self")}
        id={props.name}
        className='card'
        style={{backgroundColor : theme.backgroundCard}} 
    >
        <div className='location'>
            <Location location={props.location} color="white"/>
        </div>
        <img className='banner' src={props.banner} alt='banner'/>
        <div className='info'>
            <img className='profile-image' alt={props.name+' logo'} src={props.profile}  style={{borderColor : theme.backgroundCard}}/>
            <h2>{props.name}</h2>
        </div>
        <div className='grade'>
            <div className='item-grade' >
                <Rating cal={props.cal}/>
            </div>
        </div>
    </div>
    );
}



function Schools () {
    const [schools, setSchools] = useState([]);
    useEffect(()=>{
        getSchools().then((data)=>{
            setSchools(data);
        })
        const interval = setInterval(() => {
            getSchools().then((data)=>{
                setSchools(data);
            })
        }, 2000);
        return ()=>clearInterval(interval)
    },[]);

    const items = schools.map((data)=>
        <Item 
            banner={data.banner} 
            location={data.location} 
            name={data.name}
            key={data.name}
            profile={data.profile}
            grade={data.cal}     
            web={data.web}
            cal={data.cal}
        />
    );
    return(<>
    {items}
    </>);
}

export default Schools;