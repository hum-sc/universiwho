import React from 'react'
import Head from './components/header'
import Content from './components/content'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';


import {Theme} from './components/context/theme-context'
const themes = {
  light:{
    background : "white",
    backgroundCard: "#dfdfdf",
    primary : "#000000",
    secondary : "rgb(66, 66, 66)"
  },
  dark:{
      background : "#000000",
      backgroundCard : "#2e2e2e",
      primary : "#ffffff",
      secondary:"#dfdfdf"
  }
}


export default function App() {
  const[isDark, setDark] = useState(true);
  const lightTheme = themes.light;
  const darkTheme = themes.dark;
  document.body.style.backgroundColor = isDark ?  darkTheme.background : lightTheme.background;
  document.body.style.color = isDark ? darkTheme.primary : lightTheme.primary;
    return(
   
      <Router>
        <Theme.Provider value={
          {
            isDark, 
            setDark,
            light : themes.light,
            dark : themes.dark 
          }
        }>
            <Head/>
            <Content/>
        </Theme.Provider>
      </Router> 

  );
}

