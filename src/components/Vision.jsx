import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Vision = () => {
  const { t, i18n }=useTranslation('translation');
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
        <h1 className="title__header">{t("visionTitle")}</h1>
        <div className="line line--blue">
        </div>
    </div>
    <div className={i18n.language=='ar'?"info__text arabic" :"info__text"}>
        <p>{t("visionText")}</p>
    </div>
    <Link to='/mission'>
      <a className='btn btn--primary info__btn'>{t("visionBtn")}</a>
    </Link>
    </motion.section>
  )
}

export default Vision