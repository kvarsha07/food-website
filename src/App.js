import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './page/Contact';
import About from './page/About';
import Menu from './page/Menu';
import Pagenotfound from './page/Pagenotfound';
import Home from './page/Home';

function App (){
  return(
    <div>
      <Router> 
        <Routes> 
        <Route path="/menu" element={<Menu/>}/>
          <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
