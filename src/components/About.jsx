import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



function About({isMobile}) {
  const { t, i18n }=useTranslation('translation');
  return (
    <section className='aboutUs' name="aboutUs">
          <div className="title">
           <div className="line line--blue"></div>
             <h3 className={i18n.language=='ar'?"title__header aboutUs__title arabic":"title__header aboutUs__title"}>{t("aboutTitle")}
           </h3>
           <div className="line line--blue"></div>
       </div>
    <div className="aboutUs__card__container">
            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"}>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z"/></svg>
              </div>
            <div className="title">
           {i18n.language == "ar" && <div className="line line--blue"></div>}
             <h4 className={i18n.language=='ar'?"title__header aboutUs__title arabic" :"title__header aboutUs__title"}>{t("whoTitle")}
           </h4>
           {i18n.language == "en" && <div className="line line--blue"></div>}
       </div>
            <div className={i18n.language=='ar'?'aboutUs__text arabic':'aboutUs__text'}>
              <p>
              {t("whoText")}
              </p>
                <h5 className="title--small">{t('workingHrsTitle')}</h5>
                 <p className="title--small__text">{t('workingHrs')}</p>
            </div>
            </div>

            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"} data-aos-delay='100'>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
              </div>
            <div className="title">
           {i18n.language == "ar" && <div className="line line--blue"></div>}
            
             <h4 className={i18n.language=='ar'?"title__header aboutUs__title arabic":"title__header aboutUs__title"}>
               {t('locationTitle')}
               
           </h4>
           {i18n.language == "en" && <div className="line line--blue"></div>}

       </div>
            <div className={i18n.language=='ar'?'aboutUs__text arabic':'aboutUs__text'}>
              <p>
                {t("locationText")}
               </p>
               <h5 className="title--small">{t('addressTitle')}</h5>
               <p className="title--small__text">{t('addressText')}</p>
            </div>
            </div>

            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"} data-aos-delay='200'>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M554.9 154.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 128 80s127.1-35.88 127.1-80C639.1 319.9 641.4 327.3 554.9 154.5zM439.1 320l71.96-144l72.17 144H439.1zM256 336c0-16.12 1.375-8.75-85.12-181.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 127.1 80S256 380.1 256 336zM127.9 176L200.1 320H55.96L127.9 176zM495.1 448h-143.1V153.3C375.5 143 393.1 121.8 398.4 96h113.6c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-128.4c-14.62-19.38-37.5-32-63.62-32S270.1 12.62 256.4 32H128C110.3 32 96 46.33 96 64S110.3 96 127.1 96h113.6c5.25 25.75 22.87 47 46.37 57.25V448H144c-26.51 0-48.01 21.49-48.01 48c0 8.836 7.165 16 16 16h416c8.836 0 16-7.164 16-16C544 469.5 522.5 448 495.1 448z"/></svg>
              </div>
            <div className="title">
           {i18n.language == "ar" && <div className="line line--blue"></div>}
             <h4 className={i18n.language=='ar'?"title__header aboutUs__title arabic":"title__header aboutUs__title"}>{t('scale')}
           </h4>
           {i18n.language == "en" && <div className="line line--blue"></div>}

       </div>
            <div className={i18n.language=='ar'?'aboutUs__text arabic':'aboutUs__text'}>
              <p>
                {t('scaleText')}
              </p>
            </div>
            </div>
            
    </div>
    <Link to='/vision'>
           <a className="btn btn--outline btn--primary aboutUs__btn">
             {t("aboutBtn")}
           </a>
        </Link>
  </section>
  );
}
export default About;
