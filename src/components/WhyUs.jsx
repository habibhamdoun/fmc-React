import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


const WhyUs = ({isMobile}) => {
  return (
    <motion.section 
    initial={{translateX:1000}}
    animate={{translateX:0}}
    transition={{duration:0.4}}
    className="whyUs"
    >
    <div className="whyUs__header">
        <div className="title">
            <h3 className="title__header whyUs__title">Why Choose Us?
            </h3>
            <div className="line line--blue"></div>
        </div>
        <p className="whyUs__text">FMC is your reliable cost 
            effective service provider  
            for all logistics and freight  
            needs. Our customer centric  
            approach and dedication to  
            innovation guarantee that  
            we can tailor any solution to meet your exact  
            requirements.  
            Our business culture is based  
            around adapting to our clients  
            and to the latest technologies,  
            so we can provide you with  
            the most efficient services  
            without ever compromising  
            on quality. 
            
            </p>
    </div>
    <motion.button 
    className="btn btn--secondary whyUs__btn" 
    initial={{translateX:1000}}
    animate={{translateX:0}}
    transition={{duration:0.45}}
    ><Link to="/Contact-Us">Contact Us</Link></motion.button>
    <motion.div 
    initial={{translateX:1000}}
    animate={{translateX:0}}
    transition={{duration:0.5}} className="whyUs__img" ></motion.div>
</motion.section>
  )
}

export default WhyUs