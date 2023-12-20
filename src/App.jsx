import {Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Component/HomeSection/Home'

function App() {

  return (
    <Routes>
<Route exact path='/' element={<Home />} />
    </Routes>
      

     
    
  )
}

export default App
