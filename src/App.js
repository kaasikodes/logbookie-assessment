import "./index.css"
import "./styles/app.css";
import "./styles/utilities.css";


import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";

import MainContent from "./components/MainContent";



const App = () => {



  
 

  return (
    <Router>
      <div className= "app">
        
        <Header/>

        <MainContent/>
    
        <Footer/>

        
      </div>
      
    </Router>
    

      
    
  )
}

export default App
