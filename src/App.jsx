import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Navbar from './components/Header/Navbar'
import Banner from './components/Header/Banner'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Languages from './components/Languages/Languages'
import MyProjects from './components/MyProjects/MyProjects'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import DownloadButton from './components/DownloadButton/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
   <div className='space-y-4 container md:w-full mx-auto'>
   <Navbar />
        <Banner />
        <AboutMe/>
        <Skills/>
        <MyProjects/>
        <Languages/>
        <ContactUs/>
        <ScrollToTopButton/>
        <Footer/>


   </div>
        
    </>
  )
}

export default App
