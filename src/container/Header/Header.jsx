import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    

    
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
       

        <div className='header__info'>
          <p className='roboto'>Hello, My name is</p>
          <h1 className='head-text' style={{"display":"flex", "color":"black"}}>Brayan Salazar</h1>
          <h3 className='head-text2' style={{"display":"flex"}}>FullStack Developer / Freelancer</h3>
          <p className='header-text3'>"I am a  Developer with solid knowledge in Java, Spring Boot, microservices, React, Angular and experience with cloud computing with AWS. Passionate about innovation and learning, ready to drive exceptional projects and cutting-edge solutions."</p>
         {/*  <p className='header-text3'>Lorbaclem ipsum dolor, sit amet <span className='header-text3' style={{"color":"#1448cb","fontSize":"18px", "fontWeight":600}}> adipisicing</span> elit. Neque dolorum ut aspernatur cum nam nesciunt, nemo sint sapiente ex sunt vero quaerat rem, ipsam amet dolore necessitatibus totam reprehenderit officia!</p> */}
         {/* Soy Desarrollador de Software con conocimientos sólida en Java, Spring Boot, microservicios, React, Angular y experiencia con computacion en la nube con AWS. Apasionado por la innovación y el aprendizaje, listo para impulsar proyectos excepcionales y soluciones de vanguardia. */}
          <button type="button" className="">GET IN TOUCH</button>
        </div>
      </div>
    </motion.div>
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {["https://rat.in.ua/wp-content/uploads/2015/12/5525-React.js.png", images.flutter, "https://1.bp.blogspot.com/-MwJI22_Ek_0/XJQEjL9WGjI/AAAAAAAAJSs/Kd9WAGTItDoTRoaIFLE8qwOrj3STIMbfQCK4BGAYYCw/s1600/logo%2Bangular%2Bicon.png"].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');