import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import Banner from './components/Header/Banner'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Languages from './components/Languages/Languages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar />
        <Banner />
        <AboutMe/>
        <Skills/>
        <Languages/>
        
    </>
  )
}

export default App
