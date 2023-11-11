import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About";
//mport Footer from "./footer";
import Projects from "./Projects";
//import Contact from "./Contact";
import Work from "./Work";

function App() {
    {
    return (
      <div className="app-container">
        <Router>
        <Home/>
        <Routes>
         
          <Route path="/projects" element={<Projects />}/>
          <Route path="/" element={<About />}/>
          <Route path="/work" element={<Work />}/>
         
       
       
        </Routes>
      
      </Router>
    
      </div>
      
    );
  }
}
  
  export default App;
  
