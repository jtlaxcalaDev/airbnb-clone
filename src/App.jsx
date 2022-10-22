import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardList from './components/CardList'
import './App.css'

function App() {

  return (
    <div className='main--container'>
      <Navbar />
      <Hero />
      <CardList />
    </div>
  )
}

export default App
