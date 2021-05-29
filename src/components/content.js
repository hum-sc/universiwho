import React from 'react';
import Schools from './schools'
import '../styles/card.css'
import { Route, Switch } from 'react-router';
import SignUp from './signup';
import LogIn from './login';
function Content(){
    return(<div className="content">
        <Switch>
            <Route exact path="/" component={Schools} />
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={LogIn}/>
        </Switch>
        

    </div>);
}
export default Content;