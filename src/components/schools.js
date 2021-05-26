import React, { useState } from 'react';

import Data from '../files/data.json';

import '../styles/card.css'

import Location from './icons/location'

import pruebaIMG from '../images/rectoriaUAEM.jpg'

import profileIMG from '../images/uaem.png'

import Rating from './rating.jsx'


const dataSchools = Data[0].schools;
function Item (props) {
    return(
    <div
        onClick={()=> window.open(props.web, "_self")}
        id={props.name}
        className='card' 
    >
        <div className='location'>
            <Location location={props.location}/>
        </div>
        <img className='banner' src={pruebaIMG} alt='banner'/>
        <div className='info'>
            <img className='profile-image' alt={props.name+' logo'} src={profileIMG} />
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