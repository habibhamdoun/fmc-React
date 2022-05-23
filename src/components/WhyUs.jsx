import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const WhyUs = () => {
  const { t ,i18n }=useTranslation('translation');
  return (
    <motion.section 
      initial={{translateX:1000}}
      animate={{translateX:0}}
      transition={{duration:0.4}}
      className="whyUs"
    >
    <div className="whyUs__header">
        <div className="title">
            <h3 className="title__header whyUs__title">{t('whyUsTitle')}
            </h3>
            <div className="line line--blue"></div>
        </div>
        <p className="whyUs__text"> {t('whyUsText')}
          </p>
    </div>
    <Link to="/contact-us">
      <motion.button 
        className="btn btn--secondary whyUs__btn" 
        initial={{translateX:1000}}
        animate={{translateX:0}}
        transition={{duration:0.45}}
      >
        {t('whyUsBtn')}
      </motion.button>
    </Link>
    <motion.div 
      initial={{translateX:1000}}
      animate={{translateX:0}}
      transition={{duration:0.5}} 
      className="whyUs__img" 
    />      
</motion.section>
  )
}

export default WhyUs