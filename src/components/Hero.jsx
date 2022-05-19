import React from "react";
import { motion } from 'framer-motion';

function Hero() {



  return (
    <motion.section 
      className="hero" 
      initial={{scale: 0.1}}
      animate={{scale: 1}} 
      transition={{duration: 0.3}}
    >
      <motion.div
        className="hero__image"
      ></motion.div>
      <div className="hero__content">
        <h1 className="hero__header">
          First Modern Company
        </h1>
        <a href="#aboutUs" className="hero__toggle">
          <div className="hero__link">
            <svg xmlns="http://www.w3.org/2000/svg" className='hero__arrow'viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          </div>
        </a>
      </div>
    </motion.section>
  );
}
export default Hero;
