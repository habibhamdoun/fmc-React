import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Vision = ({isMobile}) => {
  return (
    <motion.section 
    className="info" 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.3}}
    >
    <div className=" title info__title">
        <div className="line line--blue">
        </div>
        <h1 className="title__header">Our Vision</h1>
        <div className="line line--blue">
        </div>
    </div>
    <div className="info__text">
        <p>Every customer is different, and every solution is unique.  FMC offers tailored solutions customized to meet the  specific needs and requirements of each customer.  Through our emphasis on precision, innovation and  continuous technological development, we are committed  to becoming industry pioneers in the MENA region.</p>
    </div>
    <Link to='/Mission'>
    <a className='btn btn--primary info__btn'>Our Mission</a>
    </Link>
    </motion.section>
  )
}

export default Vision