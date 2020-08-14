import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Table from './Table';

import {Switch,Route, Redirect,BrowserRouter} from 'react-router-dom';

function MainComponent() {
    return (
        <div>
            <div className="wrapper">
                
                <Header />
               
                <Switch> 

                <Route path="/home" component={Table} />
                <Route path="/form" component={Form} />

                   <Redirect to = "/home" />
                </Switch>                         
              
            </div>
        </div>
    )
}

export default MainComponent
