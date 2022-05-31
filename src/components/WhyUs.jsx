import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import audioEn from "../audio/why-choose-us2.mp3"
import audioAr from "../audio/choosear.mp3"

const WhyUs = () => {
  const { t, i18n } = useTranslation('translation');
  let audioArabic=document.getElementById("whyUsAudioAr");
  let audioEnglish=document.getElementById("whyUsAudioEn");
  function audioPlay(){
    if(audioEnglish.paused !== true || audioArabic.paused !== true ){
      audioEnglish.pause();
      audioArabic.pause();
    }
    else if(i18n.language=='ar'){
      if(audioEnglish.paused !== true){
        audioEnglish.pause();
      }
    audioArabic.play();
    }
    else{
      if(audioArabic.paused !== true){
        audioArabic.pause();
      }
    audioEnglish.play();
    }
  }
  return (
    <motion.section
      initial={{ translateX: 1000 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.4 }}
      className={i18n.language=='ar'?"whyUs whyUs--arabic":"whyUs"}
    >
      <audio id='whyUsAudioAr' src={audioAr}></audio>
      <audio id='whyUsAudioEn' src={audioEn}></audio>
      <div className={i18n.language=='ar'?"whyUs__header whyUs__header--arabic":"whyUs__header"}>
        <div className="title">
          {i18n.language=='ar'&&<div className="line line--blue"></div>}
          <h3 className={i18n.language == 'ar' ? "title__header whyUs__title arabic" : "title__header whyUs__title arabic"}>{t('whyUsTitle')}
          </h3>
          {i18n.language=='en'&&<div className="line line--blue"></div>}
        </div>
        <p className={i18n.language=='ar'?"whyUs__text arabic":"whyUs__text"} onClick={audioPlay}> {t('whyUsText')}
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