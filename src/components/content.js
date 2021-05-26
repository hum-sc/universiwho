import React from 'react';
import Schools from './schools'
import '../styles/card.css'
import { Route, Switch } from 'react-router';
import SignUp from './signup';
function Content(){
    return(<div className="content">
        <Switch>
            <Route exact path="/" component={Schools} />
            <Route exact path="/signup" component={SignUp}/>
        </Switch>
        

    </div>);
}
export default Content;