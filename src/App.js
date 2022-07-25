import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode ,setMode]=useState('light');  //Wether the site is dark or light
  const [alert ,setAlert]=useState(null);

  const showAlert=(type,head,message)=>{
    setAlert({
      type: type,
      head: head,
      message:message
      
    })
    setTimeout(()=>{
     setAlert(null)
    },2000)
  }
   const toggleRemovepalleteCls=()=>{
       document.body.classList.remove('bg-primary');
       document.body.classList.remove('bg-success');
       document.body.classList.remove('bg-danger');
       document.body.classList.remove('bg-warning');
   }

  const toggleMode=(cls)=>{
    toggleRemovepalleteCls();

    if(cls!==null){
    document.body.classList.add('bg-'+cls);
  }

    else{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#343a40";
      document.body.style.color="white";
      showAlert('light','Hurry!','Dark Mode has been Enabled')
      document.title="Home-Darkmode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert('dark','Hurry!','Light Mode has been Enabled');
      document.title="Home-Lightmode";

    }
  }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About Us ('-')" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>

      <div className="container my-3">
      {/* ------------------------Router Setup------------------ */}
      <Routes>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Text Analyzer" mode={mode}/>}/>    
          <Route exact path="/AboutUs" element={ <AboutUs mode={mode}/>}/>
     </Routes> 
    </div>  
    </Router>
    </>
  );
}
export default App;
