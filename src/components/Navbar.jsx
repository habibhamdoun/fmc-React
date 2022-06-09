import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = ({isMobile}) => {
  const {t,i18n}=useTranslation('translation');
  const [isOpen, setIsOpen] = useState(false);
  const [buttontext ,setButtonText]=useState('ENG');
  function handleClick() {
    if(i18n.language=='en'){
      i18n.changeLanguage('ar');
      setButtonText('العربية');
    } 
      else{
        i18n.changeLanguage('en');
        setButtonText('ENG');
      }
    }
  
  return (
    <motion.nav 
      className={isOpen ? "nav collapsible collapsible--expanded" : "nav collapsible"} 
      initial={{translateY:-200}}
      animate={{translateY:0}}
    >
    {i18n.language=='en' || isMobile ?<div className="nav__brand__container">
     <NavLink onClick={()=> setIsOpen(false)}  to="/"><h3 className='nav__name'>FMC</h3></NavLink>
      <div onClick={()=>setIsOpen(old => old ? false : true)} className="nav__collapsible__container">
        <svg xmlns="http://www.w3.org/2000/svg" className="collapsible__toggle" viewBox="0 0 448 512">
          <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"/></svg>
      </div>
    </div> : ''}
    <ul className={i18n.language=='ar'  ? "list list--inline nav__list nav__list--arabic collapsible__content" : "list list--inline nav__list collapsible__content"}>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/">{t('home')}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/vision"  >{t("vision")}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/mission"  >{t("mission")}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/clients"  >{t("clients")}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/services" >{t("services")}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/why-us" >{t("whyUs")}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/contact-us" >{t('contactUs')}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/quote" >{t('quote')}</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/comment" >{t('review')}</NavLink></li>
      <button className='language__input nav__item' onClick={handleClick}>{buttontext}</button>
    </ul>
    {i18n.language=='ar' && !isMobile ? <NavLink onClick={()=> setIsOpen(false)}  to="/"><h3 className='nav__name'>FMC</h3></NavLink> : ""}

</motion.nav>
  )
}

export default Navbar