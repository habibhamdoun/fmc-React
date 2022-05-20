import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Mission = ({isMobile}) => {
  return (
    <motion.section 
      className="section" 
      initial={isMobile ? '':{boxShadow:'0'}}
      animate={isMobile ? '':{boxShadow:"38px 38px 0px 1px rgb(211, 29, 35)"}}
      transition={{duration:0.4}}
    >
        <motion.div 
          className="section__img" 
          initial={isMobile ? 
            {
              boxShadow:'0',
              translateY:-1000
            }:{
              translateY:-1000
            }
          }
          animate={isMobile ? {boxShadow:"12px 12px 0px 1px rgb(211, 29, 35)",translateY:0}:{translateY:0}}
          transition={{duration:0.4}}
        />
        <motion.div 
        className="section__content"
        initial={{translateY:-1000}}
        animate={{translateY:0}}
        transition={{duration:0.4}}
        >
            <div className="title">
                <h2 className="title__header">Our Mission</h2>
                <div className="line line--blue"></div>
            </div>
            <p>We ensure to provide  
                our valuable customers      
                with an end-to-end (E2E)  
                supply Chain management  
                services to enable their  
                business demands. We  
                imprint the Core value in  
                our people to drive FMC  
                in to a customer-centric  
                that enables Innovative  
                modular designs, flexible  
                pricing, effective and  
                efficient solutions That  
                are adaptable to the new  
                business trends.
                </p>
        </motion.div>
    </motion.section>
  )
}

export default Mission