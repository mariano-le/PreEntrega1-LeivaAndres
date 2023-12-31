import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
  const greeting = "Bienvenidos"

  return (
    <>
    <Navbar />
    <ItemListConteiner greeting={greeting} />
    </>
  )
}

export default App
