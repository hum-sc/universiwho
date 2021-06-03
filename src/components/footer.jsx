import { useContext } from 'react';
import {Theme} from '../context/theme-context'
import {User} from '../context/user-context'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


import '../styles/footer.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

library.add(fab, fas)

function Footer (props) {
    const contextTheme = useContext(Theme);
    const contextUser = useContext(User);
    var theme = contextTheme.isDark ? contextTheme.dark:contextTheme.light;
    const aStyle = {
        color : theme.primary
    }
    return(<div className="footer-container" style={{backgroundColor:theme.backgroundCard}}>
            <NavLink exact to="/" style={aStyle}>
                    <h3>
                        UniWhat ?
                    </h3>
                    
            </NavLink>
            <p>Humberto Antonio Salinas Cortés | Todos los derechos reservados © 2021</p>
            <div className="socialmenu">
                <a className="socialicon" href="https://github.com/hum-sc/">
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg"/>
                </a>
                <a className="socialicon" href="https://www.facebook.com/humbertoantsc">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="lg"/>
                </a>
                <a className="socialicon" href="https://twitter.com/hum_sc/">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="lg"/>
                </a>
                <a className="socialicon" href="https://instagram.com/hum_sc/">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="lg"/>
                </a>
            </div>
        </div>)
}
export default Footer;