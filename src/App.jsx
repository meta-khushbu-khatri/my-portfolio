import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Review from './Pages/Contacts'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Skills from './component/Skills'

import Contacts from './Pages/Contacts'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
