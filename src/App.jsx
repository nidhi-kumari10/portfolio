import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/PortFolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
  <>
  <Navbar/>
  <Home/>
  <About/>
  <Skills/>
  <Portfolio/>
  <Contact/>
  <ToastContainer />
  </>
  )
}

export default App
