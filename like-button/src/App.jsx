import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButton from"./LikeButton"
function App() {
  

  return (
    <div className="container">
      <h1 className="heading">Like Button</h1>
      <LikeButton/>
    </div>
  )
}

export default App
