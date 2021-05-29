import React, { useContext} from 'react';

import Data from '../files/data.json';

import '../styles/card.css'

import Location from './location'
import Rating from './rating.jsx'

import pruebaIMG from '../images/rectoriaUAEM.jpg'
import profileIMG from '../images/uaem.png'

import {Theme} from './context/theme-context'




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
        <img className='banner' src={pruebaIMG} alt='banner'/>
        <div className='info'>
            <img className='profile-image' alt={props.name+' logo'} src={profileIMG}  style={{borderColor : theme.backgroundCard}}/>
            <h2>{props.name}</h2>
        </div>
        <div className='grade'>
            <div className='item-grade' >
                <Rating/>
            </div>
        </div>
    </div>
    );
}


const items = dataSchools.map((data)=>
    <Item 
        banner={data.bannerImg} 
        banner-alt={data.bannerAlt} 
        location={data.location} 
        name={data.name}
        key={data.id.toString()}
        profile={data.profileImg}
        grade={data.grade}
        classrom={data.classrom}
        count={data.count}
        web={data.web}
    />
);
function Schools () {
    return(<>
    {items}
    </>);
}

export default Schools;