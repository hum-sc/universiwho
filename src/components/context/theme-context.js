
import React from 'react'
import {createContext ,useState, useEffect} from 'react'
var darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
var mobile = window.matchMedia('(max-width:659px)').matches;

var _isDark = localStorage.getItem("isDark")
if(_isDark==="true"){
  darkMode=true
}else{
  darkMode=false
}

const themes = {
    light:{
      background : "white",
      backgroundCard: "#dfdfdf",
      primary : "#000000",
      secondary : "rgb(66, 66, 66)",
      error:"#B00020"
    },
    dark:{
        background : "#121212",
        backgroundCard : "#323232",
        primary : "#ffffff",
        secondary:"rgb(139, 139, 139)",
        error:"#e94948"
    }
}

export const Theme = createContext({
    
})

function ThemeProvider (props) {
    const[isDark, setDark] = useState(true);
    const [isMobile, setMobile] = useState(false);
    const lightTheme = themes.light;
    const darkTheme = themes.dark;

    
    useEffect(()=>{
        darkMode ? setDark(true):setDark(false)
    },[])
    useEffect(()=>{
      mobile ? setMobile(true):setMobile(false)
  },[mobile])
    localStorage.setItem("isDark", isDark)
    document.body.style.backgroundColor = isDark ?  darkTheme.background : lightTheme.background;
    document.body.style.color = isDark ? darkTheme.primary : lightTheme.primary;
    return (
        <Theme.Provider value={
            {
              isDark, 
              setDark,
              light : themes.light,
              dark : themes.dark,
              isMobile,
            }
          }>
              {props.children}
        </Theme.Provider>
    );
}

export default ThemeProvider

  