import React from 'react';
import Data from '../files/data.json';
import '../styles/card.css'
import Location from '../images/location.svg'
const dataSchools = Data[0].schools;
function Item (props) {
    
    return(
    <div
        id={props.name}
        className='card-school' 
        style={
            {
                backgroundImage:`url(${props.banner})`
            }
        }
    >
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
    </div>)
    ;
}
console.log(dataSchools)

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
    />
);
function Schools () {
    return(<>
    {items}
    </>);
}

export default Schools;