import React from 'react'
import { useState , useContext, useEffect } from "react";
import {Theme} from '../context/theme-context'
import '../styles/card.css'


function Star (){
    const contextTheme = useContext(Theme);
    var theme = contextTheme.isDark ? contextTheme.dark : contextTheme.light;
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={theme.secondary}>
                <g>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                    <path d="M0,0h24v24H0V0z" fill="none"/>
                </g>
                <g>
                    <g>
                        <polygon opacity=".3" points="12,15.4 8.24,17.67 9.24,13.39 5.92,10.51 10.3,10.13 12,6.1 13.71,10.14 18.09,10.52 14.77,13.4 15.77,17.68"/>
                        <path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4l-3.76,2.27 l1-4.28l-3.32-2.88l4.38-0.38L12,6.1l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/>
                    </g>
                </g>
            </svg>
        </>
    );
}


function Rating(props){
    const [grade, setGrade]=useState(10)
    const a = 5;
    const indents = [];
    for (var i = 0; i < parseInt(props.cal/2); i++) {
        indents.push("someting");
    }
    const stars = indents.map((dat)=><Star></Star>)
    return(<div className="rating">
        {stars}
        </div>
    );
}

export default Rating;