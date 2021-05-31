import { useContext } from 'react';
import {Theme} from '../context/theme-context'
function Hamburger (){
    const contextTheme = useContext(Theme);
    const theme = contextTheme.isDark ? contextTheme.dark : contextTheme.light;
    return (<div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={theme.primary}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
    </div>);
}

export default Hamburger;