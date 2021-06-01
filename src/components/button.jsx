import styled from "styled-components";
import {Theme} from '../context/theme-context'
import {useContext} from 'react'

const MyButton = styled.button`
    background-color: transparent;
    border: 2px solid;
    height: 40px;
    width: max-content;
    padding-left: 15px;
    padding-right: 15px;
    color: ${props=>props.primary};
    border-radius:5px;
    font-weight:600;

    
    &:hover{
        color:${props=>props.background};
        border:none;
        background:${props=>props.primary};
    }
`

function Button(props){
    const contextTheme = useContext(Theme)
    var theme = contextTheme.isDark ? contextTheme.dark:contextTheme.light;
    return(
        <MyButton onClick={props.click} background={theme.background} primary={theme.primary} secondary={theme.secondary}>{props.text}</MyButton>
    );
}
export default Button;