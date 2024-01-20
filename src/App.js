import React from 'react'
import  { About, Footer, Header, Testimonial, Skills, Work  } from './container';
import { Navbar } from './components';
import './App.scss'
import Gallery from './container/Gallery/Gallery';
import { BrowserRouter } from 'react-router-dom';
 const App = () => {
  return (
    <BrowserRouter >
<div className='app'>
    <Navbar/> 
   <Header/>
   <About/>
   <Work/>   
   <Skills/>
  {/*  <Testimonial/> */}
  <Gallery/>
   <Footer/>
    </div> 
    </BrowserRouter>
    
  );
}

export default App;