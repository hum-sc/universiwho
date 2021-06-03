import React from 'react';
import Schools from './schools'
import '../styles/card.css'
import { Route, Switch, useLocation } from 'react-router';
import SignUp from './signup';
import LogIn from './login';
import Landing from './landing';
import Head from './header';
import How from './how';
function Content(){
    console.log(useLocation())
    return(<div className="content" style={{minHeight:"calc(100vh - 64px)"}}>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/escuelas" component={Schools} />
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/howto" component={How}/>
            <Route path="/:id" child={<Head/>}/>
            
        </Switch>
        

    </div>);
}
export default Content;