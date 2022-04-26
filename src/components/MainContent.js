import React from 'react'
import { Switch } from 'react-router-dom';
import {  Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';

const MainContent = () => {
  return (
    <div className="app__main">
        <Switch>
          <Route path ='/' exact render= {() => (
              <Home/>
          )}/> 
          
          <Route path ='/contact' exact render= {() => (
              <Contact/>
          )}/> 
          <Route component={NotFound}/>  
        </Switch>
        
      
    </div>
  )
}

export default MainContent