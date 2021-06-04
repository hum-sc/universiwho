import { useContext } from 'react';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'
import Schools from './schools';
import '../styles/landing.css';
import Persona1 from '../images/persona5.jpg'
import Persona2 from '../images/persona2.jpg'
import Persona3 from '../images/persona3.jpg'
import Persona4 from '../images/persona6.jpg'
import Button from './button';
import { Link, Redirect} from 'react-router-dom';
import How from './how';
function Landing (){
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);
    var theme = contextTheme.isDark ? contextTheme.dark:contextTheme.light;
    return(<>
     {contextUser.isLoged && <Redirect to="/escuelas"/>}
    <div className="hero" style={{backgroundColor:theme.background}} >
        <div className="images" style={{backgroundColor:theme.primary}}>
            <img src={Persona1} alt="" className="persona1"/>
            <img src={Persona2} alt="" className="persona2"/>
            <img src={Persona3} alt="" className="persona3"/>
            <img src={Persona4} alt="" className="persona4"/>
        </div>
        <div className="hero-info">
        <h1>Elije la mejor universidad</h1>
        <p>Conoce la calificacion que le otorgan los alumnos a cada universidad, desde los profesores, hasta las aulas, no escojas al azar</p>
        <Link to="/escuelas">
            <Button text="Ver universidades"></Button>
        </Link> 
        </div>
    </div>
    <How/>
    <div className="video-container">
        <h2>¿Como elegir una universidad?</h2>
        <div className="video">
            <iframe width="980" height="551" src="https://www.youtube.com/embed/YI68dALshr0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </div>
    </div>
    <div className="genially-container">
        <div className="genially">
            <iframe title="genially" frameBorder="0" width="800" height="1300" src="https://view.genial.ly/60b86a9801f7780d2ffafc4a" type="text/html" allowscriptaccess="always" allowFullScreen={true} scrolling="yes" allownetworking="all" ></iframe> 
        </div>    
    </div>
    <div className="schools-hero">
            <Schools/>
        </div>
    
    
    </>);
}

export default Landing;