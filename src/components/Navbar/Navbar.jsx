import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

import { images } from '../../constants';
import './Navbar.scss';
import { FaLanguage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact', ].map((item) => (
          <li className="app__flex p-text efecto-basic efecto1" key={`link-${item}`}>
         
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
         <li className="app__flex p-text" >
            <Link to={"https://github.com/BrayanSalazarUSA"}target='_blank'  style={{"fontSize":"25px"}}><BsGithub/></Link>
          </li>
         
       {/*   <li className=" p-text" >
            <div />
            <a href='#' style={{"fontSize":"25px"}}> <img style={{"width":"30px"}} src={images.usa}/> </a>
            <a href='#' style={{"fontSize":"25px"}}><img style={{"width":"30px"}}src={images.spain}/></a>
          </li> */}
         <Link to='https://drive.google.com/file/d/14CyrbtMr1LolM1daqcMMPjZvM0PPf2D8/view?usp=sharing"' target='_blank' className="app__flex p-text cv-link" >
         <button  class="button" type="button">
  <span class="button__text">CV</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
          </Link>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
                
              ))}
                <li className="app__flex p-text" >
            <Link to={"https://github.com/BrayanSalazarUSA"} style={{"fontSize":"25px"}}><BsGithub/></Link>
          </li>

          <Link to='https://drive.google.com/file/d/14CyrbtMr1LolM1daqcMMPjZvM0PPf2D8/view?usp=sharing"' target='_blank' className="app__flex p-text cv-link" >
         <button  class="button" type="button">
  <span class="button__text">CV</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
          </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
