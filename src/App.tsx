// import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './Sections/Hero'
import Navbar from './Sections/Navbar'
import FirstVideo from './Sections/FirstVideo'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <FirstVideo />
    </main>
  )
}

export default App