import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const WhyUs = () => {
  const { t, i18n } = useTranslation('translation');
  return (
    <motion.section
      initial={{ translateX: 1000 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.4 }}
      className={i18n.language=='ar'?"whyUs whyUs--arabic":"whyUs"}
    >
      <div className={i18n.language=='ar'?"whyUs__header whyUs__header--arabic":"whyUs__header"}>
        <div className="title">
          {i18n.language=='ar'&&<div className="line line--blue"></div>}
          <h3 className={i18n.language == 'ar' ? "title__header whyUs__title arabic" : "title__header whyUs__title arabic"}>{t('whyUsTitle')}
          </h3>
          {i18n.language=='en'&&<div className="line line--blue"></div>}
        </div>
        <p className={i18n.language=='ar'?"whyUs__text arabic":"whyUs__text"}> {t('whyUsText')}
        </p>
      </div>
      <Link to="/contact-us">
        <motion.button
          className="btn btn--secondary whyUs__btn"
          initial={{ translateX: 1000 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.45 }}
        >
          {t('whyUsBtn')}
        </motion.button>
      </Link>
      <motion.div
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        className={i18n.language=='ar'?"whyUs__img whyUs__img--arabic":"whyUs__img"}
      />
    </motion.section>
  )
}

export default WhyUs