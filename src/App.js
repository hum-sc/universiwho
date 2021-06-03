import React from 'react'
import Head from './components/header'
import Content from './components/content'
import { HashRouter as Router, Route} from 'react-router-dom';

import ThemeProvider from './context/theme-context'
import UserProvider from './context/user-context'
import Footer from './components/footer';



export default function App() {
    return(
      <Router basename={process.env.PUBLIC_URL}>
        <UserProvider>
          <ThemeProvider >
              <Head />
              <Content/>
              <Footer/>
          </ThemeProvider>
        </UserProvider>
      </Router> 

  );
}

