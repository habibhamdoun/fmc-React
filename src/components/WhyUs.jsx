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
    audioArabic.currentTime=0;
    audioArabic.play();
    }
    else{
      if(audioArabic.paused !== true){
        audioArabic.pause();
      }
    audioEnglish.currentTime=0;
    audioEnglish.play();
    }
  }
  return (
    <section
      className={i18n.language=='ar'?"whyUs whyUs--arabic":"whyUs"}
    >
      <audio id='whyUsAudioAr' src={audioAr}></audio>
      <audio id='whyUsAudioEn' src={audioEn}></audio>
      <div className={i18n.language=='ar'?"whyUs__header whyUs__header--arabic":"whyUs__header"}>
        <motion.div
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.3 }}
         className="title">
          {i18n.language=='ar'&&<div className="line line--blue"></div>}
          <h3 className={i18n.language == 'ar' ? "title__header whyUs__title arabic" : "title__header whyUs__title arabic"}>{t('whyUsTitle')}
          </h3>
          {i18n.language=='en'&&<div className="line line--blue"></div>}
        </motion.div>
        <div className="whyUs__content">
          <motion.p
           initial={{ translateX: 1000 }}
           animate={{ translateX: 0 }}
           transition={{ duration: 0.4, delay:0.1 }}
           className={i18n.language=='ar'?"whyUs__text arabic":"whyUs__text"} onClick={audioPlay}> {t('whyUsText')}
          </motion.p>
          <motion.ul 
          initial={{ translateX: 1000 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.4, delay:0.15 }}
          className={i18n.language=='ar'?'whyUs__list arabic' : 'whyUs__list'}>
            <h4 className='whyUs__list__title'>{t('whyUslistTitle')}</h4>
            <li><span className='whyUs__list__header'>{t('whyUsList1Header')}</span> {t('whyUsList1')}</li>
            <li><span className="whyUs__list__header">{t('whyUsList2Header')}</span> {t('whyUsList2')}</li>
            <li><span className="whyUs__list__header">{t('whyUsList3Header')}</span>{t('whyUsList3')} </li>
            <li><span className="whyUs__list__header">{t('whyUsList4Header')}</span>{t('whyUsList4')}</li>
            <li>{t('whyUslist5extra')}<span className="whyUs__list__header"> {t('whyUsList5Header')} </span>{t('whyUsList5')}</li>
          </motion.ul>
        </div>
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
    </section>
  )
}

export default WhyUs