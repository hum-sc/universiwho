import React, { useState } from 'react';
import Data from '../files/data.json';
import '../styles/card.css'
import Location from '../images/location.svg'
const dataSchools = Data[0].schools;
function Item (props) {
    return(
    <div
        onClick={()=> window.open(props.web, "_self")}
        id={props.name}
        className='card-school' 
    >
        <div className='back'>
            <img className='banner' src={props.banner} />
            <div className='dropend'/>
        </div>
        
        <div className="cardContainer">
            <div className='location'>
                <img alt='location pin' src={Location} className='locationpin' />
                <p className='location-text'>{props.location}</p>
            </div>
            <div className='info'>
                <img className='profile-image' alt={props.name+' logo'} src={props.profile} />
                <h2>{props.name}</h2>
            </div>
            <div className='grade'>
                <div className='item-grade' >
                    <p className='gradeText'>Calificación</p>
                    <h4 className='gradeNumber'>{props.grade}</h4>
                </div>
                <div className='item-grade' >
                    <p className='gradeText'>Calidad de Aulas</p>
                    <h4 className='gradeNumber'>{props.classrom}</h4>
                </div>
                <div className='item-grade' >
                    <p className='gradeText'>No. Carreras</p>
                    <h4 className='gradeNumber'>{props.count}</h4>
                </div>
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