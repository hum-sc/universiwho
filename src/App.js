import React from 'react'
import Head from './components/header'
import Content from './components/content'
import { HashRouter as Router} from 'react-router-dom';

import ThemeProvider from './components/context/theme-context'
import UserProvider from './components/context/user-context'



export default function App() {
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <UserProvider>
          <ThemeProvider >
              <Head />
              <Content/>
          </ThemeProvider>
        </UserProvider>
      </Router> 

  );
}

