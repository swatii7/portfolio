import {Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Component/HomeSection/Home'
import About from './Component/AboutSection/About';
import "animate.css/animate.min.css";

function App() {

  return (
    <Routes>
<Route exact path='/' element={<Home />} />
<Route path='/about' element={<About />} />
    </Routes>
      

     
    
  )
}

export default App
