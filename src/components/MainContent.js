import React from 'react'
import {  Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';

const MainContent = () => {
  return (
    <div className="app__main">
        <Route path ='/' exact render= {() => (
            <Home/>
        )}/> 
        
        <Route path ='/contact' exact render= {() => (
            <Contact/>
        )}/> 
        {/* <Route path ='/*'  render= {() => (
            <NotFound/>
        )}/>  */}
      
    </div>
  )
}

export default MainContent