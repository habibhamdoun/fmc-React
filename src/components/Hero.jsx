import React from "react";
import { motion } from 'framer-motion';

function Hero() {
  let Scroll   = require('react-scroll');
  let Element  = Scroll.Element;
  let scroller = Scroll.scroller;
  function handleScroll(){
      scroller.scrollTo("aboutUs", {
        duration: 400,
        delay: 0,
        smooth: true,
        offset:100,
      });
    
  }
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
        <div className="hero__heading">
          <h1 className="hero__header">
            First Modern Company
          </h1>
          <h5 className="hero__quote">"The essence of life is to serve others and do good"-Sai Baba</h5>
        </div>
        <a onClick={handleScroll} className="hero__toggle">
            <svg xmlns="http://www.w3.org/2000/svg" className='hero__arrow'viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
        </a>
      </div>
    </motion.section>
  );
}
export default Hero;
