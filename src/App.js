// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import About from './Components/About';
// import { BrowserRouter as BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light') //Whether dark mode is enabled or not
  const [alert, setAlert] = useState("null")

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode == "light"){
      setmode('dark');
      document.body.style.backgroundColor="black"
      showAlert("Dark Mode has been enabled","success")
      setInterval(() => {
        document.title = "Text Editor - Dark Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Made By Vivek Modi";
      }, 1500);
    }else{
      setmode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success")
      setInterval(() => {

        document.title = "Text Editor - Light Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Made By Vivek Modi";
      }, 1500);
    }
  }
  return (
    
    <>
    {/* <BrowserRouter> */}
    <Navbar aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert }/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/" element = {<Textform showAlert ={showAlert} heading="Enter the text to Analyzer Below" mode={mode}/>}/>
    </Routes>
    <Routes>
      <Route exact path="/About" element = {<About/>}/>
    </Routes> */}
    <Textform showAlert ={showAlert} heading="Enter the text to Analyzer Below" mode={mode}/>
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}
export default App;
