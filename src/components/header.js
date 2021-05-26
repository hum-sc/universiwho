import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header (){
    return(
    <div className="container">
        <h3 className="title">UniverWhat ?</h3>
        <div className="nav-container" >
            <a className="nav-item">
                <Link to="/"> Inicio </Link>
            </a>
            <a className="nav-item">
                <Link to="/login"> Log In </Link>
            </a>
            <a className="nav-item">
                <Link to="/signup"> Sing Up </Link>
            </a>
        </div>
    </div>
    );
}
export default Header;