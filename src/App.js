import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Users from './Users';
import Post from './Post';



function App() {
  return (
    <>
    
      
      {/* imp= switch always shows the first path that matches */}
      <Switch>  
        <Route exact path='/'  component={Home}/>
        <Route path='/aboutus'  component={Aboutus}/>
        <Route path='/users' component={Users}/>
        <Route path='/post' component={Post}/>
      </Switch>

     

     

     
    </>
  );
}

export default App;
