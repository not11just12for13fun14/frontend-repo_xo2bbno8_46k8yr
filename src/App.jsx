import React from 'react'
import Navbar from './components/Navbar'
import Fest from './components/Fest'
import './components/Navbar.css'
import './components/fest.css'

function App(){
  return (
    <div style={{ background: '#4a3f36', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Fest />
      </main>
    </div>
  )
}

export default App
