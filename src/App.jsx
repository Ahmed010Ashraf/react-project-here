
import { useState } from 'react'
import './App.css'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Hero from './component/navbar/hero/Hero'
import Navbar from './component/navbar/Navbar'
import Player from './component/palyer/Player'
import Slider from './component/slider/Slider'
import Text from './component/text/Text'
import Vidio from './component/vidio/Vidio'


function App() {

  const [cont, setcont] = useState(false)

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <About />
      </div>
      <div className="container">
        <Text h2="video" p="your are in video section"/>
      <Vidio setcont={setcont}/>
      </div>
      
        <Text h2="testimonials" p="your are in testimonials section"/>
    <Slider />
     
        <div className="container">
        <Text h2="contact" p="your are in contact section"/>
        <Contact/>
        </div>
        <Footer/>
        <Player setcont={setcont} cont={cont}/>
    </>
  )
}

export default App
