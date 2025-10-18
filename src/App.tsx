// import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './Sections/Hero'
import Navbar from './Sections/Navbar'
import FirstVideo from './Sections/FirstVideo'
import Jason from './Sections/Jason'
import SecondVideo from './Sections/SecondVideo'
import Lucia from './Sections/lucia'


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <FirstVideo />
        <Jason />
        <SecondVideo />
        <Lucia />
    </main>
  )
}

export default App