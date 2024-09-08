import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header/>
    <Home/>
    <Pricing/>
    <Footer/>
   </div>
  )
}

export default App
