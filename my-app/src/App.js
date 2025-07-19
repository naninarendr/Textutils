
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[mode, setmode]= useState('light')
  const[alert, setalert]= useState('null')

  const showalert=(message, type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setalert('null')
        }, 3000);
  }

  const toggle=()=>{
    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor="#042743";
        showalert("Dark mode has been enabled","success");
        document.title="Dark mode is enabled";
        setInterval(() => {
           document.title="Dark mode is amazing";
        }, 2000);
         setInterval(() => {
           document.title="Dark mode is wow";
        }, 1500);
        
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("light mode has been enabled","success");
      document.title="light mode is enabled"
    }
    
  }
  return (
   <>
 <Router>
<Navbar title="Textutiles" aboutText="About" mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
<div className='container my-3'>

     <Routes>
       <Route path="/about" element={<About />} />
       <Route path="/" element={<TextForm showalert={showalert} heading="Enter the Text" mode={mode} />} />
    </Routes>


</div>
</Router>

  </>
  );
}

export default App;
