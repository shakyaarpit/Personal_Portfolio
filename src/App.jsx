
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import Exprience from './Components/Pages/Exprience';
import Project from './Components/Pages/Project';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
     {/* <Home/>
     <About/>
     <Exprience/>
     <Project/>
     <Contact/> */}
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/exprience' element={<Exprience/>}/>
     <Route path='/project' element={<Project/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>

     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
