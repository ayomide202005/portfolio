import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Aboutme from './components/Aboutme'
import Myworks from './components/Myworks'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Experience />
    <Aboutme  />
    <Myworks />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
