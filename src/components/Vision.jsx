import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import audioEn from "../audio/our-vision2.mp3"
import audioAr from "../audio/visionar.mp3"


const Vision = () => {
  const { t, i18n }=useTranslation('translation');
  let audioArabic=document.getElementById("visionAudioAr");
  let audioEnglish=document.getElementById("visionAudioEn");
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
      className="info" 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.3}}
    >
      <audio id='visionAudioAr' src={audioAr}></audio>
      <audio id='visionAudioEn' src={audioEn}></audio>
    <div className=" title info__title">
        <div className="line line--blue">
        </div>
        <h1 className="title__header">{t("visionTitle")}</h1>
        <div className="line line--blue">
        </div>
    </div>
    <div className={i18n.language=='ar'?"info__text arabic" :"info__text"}>
        <p onClick={audioPlay}>{t("visionText")}</p>
    </div>
    <Link to='/mission'>
      <a className='btn btn--primary info__btn'>{t("visionBtn")}</a>
    </Link>
    </motion.section>
  )
}

export default Vision