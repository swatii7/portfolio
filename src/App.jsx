import {Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Component/HomeSection/Home'
import About from './Component/AboutSection/About';
import "animate.css/animate.min.css";
import Resume from './Component/ResumeSection/Resume';
import Portfolio from './Component/PortfolioSection/Portfolio';
import Service from './Component/ServiceSection/Service';
import Contact from './Component/ContactSection/Contact';

function App() {

  return (
    <Routes>
<Route exact path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/resume' element={<Resume />} />
<Route path='/portfolio' element={<Portfolio />} />
<Route path='/services' element={<Service />} />
<Route path='/contact' element={<Contact />} />
    </Routes>
      

     
    
  )
}

export default App
