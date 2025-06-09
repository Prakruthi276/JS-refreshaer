import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

let name="Harry";
function App() {
  const[mode,setMode]=useState('light');//it sets the mode to the initial state//

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  
  return (
      <>
    <Navbar  title="textUtils" mode={mode} toggleMode={toggleMode}/>//toggleMode//
     <TextForm heading="enter the text to the container"  mode={mode}/>
      {/*<About/>*/}
      

    

     </>
  );
}

export default App;
