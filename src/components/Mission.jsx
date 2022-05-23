import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Mission = ({isMobile}) => {
  const { t, i18n }=useTranslation('translation');
  return (
    <motion.section 
      className="section" 
      initial={isMobile ? '':{boxShadow:'0'}}
      animate={isMobile ? '':{boxShadow:"9px 5px 0px 5px rgb(211, 29, 35)"}}
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
                <h2 className="title__header">{t('missionTitle')}</h2>
                <div className="line line--blue"></div>
            </div>
            <p>{t('missionText')}
                </p>
        </motion.div>
    </motion.section>
  )
}

export default Mission