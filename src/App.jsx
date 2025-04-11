import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Navbar, Contact, About, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Certification, Programming_platform} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech />
      <Works/>
      {/* <Feedbacks /> */}
      <Certification />
      <Programming_platform />
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
