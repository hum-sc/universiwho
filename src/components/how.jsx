import '../styles/how.css'
import {Theme} from '../context/theme-context'
import { useContext } from "react";
import Persona1 from '../images/persona5.jpg'
import Persona2 from '../images/persona2.jpg'
import Persona3 from '../images/persona3.jpg'
import Persona4 from '../images/persona6.jpg'
function How(){
    const contextTheme = useContext(Theme);
    const isDark = contextTheme.isDark;
    var theme;
    isDark ? theme = contextTheme.dark : theme = contextTheme.light;
    return(<>
    <div className="how-container">
    <div className="back">
        <img src={Persona1} alt="" className="persona1-how"/>
    </div>
    <div className="back2">
        <img src={Persona2} alt="" className="persona2-how"/>
    </div>
        <h2>¿Cómo usar la aplicación? </h2>
        <div className="container-inhow">
            <div className="right">
                <h4>Inicia sesión</h4>
                <p>Posteriormente te llevara al inicio, ahi encontraras el listado de escuelas listadas de 
                    menor a mayor</p>
                <h4>Ve a su pagina </h4>
                <p>Da click sobre la universidad que te interese, se desplegara un menu, ahí da click en sitio web</p>
            </div>
            <div className="left">
                <h4>Califica tu experiencia</h4>
                <p>Justo debajo de el sitio web podras ingresar el nivel de tu experiencia en la universidad</p>
                <h4>Registra tu plantel</h4>
                <p>En la barra de navegacion encontraras un simbolo de +, da click sobre el y llena el formulario, 
                    te pedira la url del escudo, banner y la calificacion que le otorgas
                </p>
            </div>
        </div>
    </div>
    </>);
}

export default How;