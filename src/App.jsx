import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom' 
import Home from './Pages/Home'
import Review from './Pages/Review'
import Projects from './Pages/Projects'
import About from './Pages/About'

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/*' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/projects' element= {<Projects/>}/>
        <Route path='/review' element= {<Review/>}/>
    

      </Routes>
     
    </BrowserRouter>
  )
}

export default App
