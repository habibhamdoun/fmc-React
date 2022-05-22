import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
      className={isOpen ? "nav collapsible collapsible--expanded" : "nav collapsible"} 
      initial={{translateY:-200}}
      animate={{translateY:0}}
    >
    <div className="nav__brand__container">
      <h3 className='nav__name'>FMC</h3>
      <div onClick={()=>setIsOpen(old => old ? false : true)} className="nav__collapsible__container">
        <svg xmlns="http://www.w3.org/2000/svg" className="collapsible__toggle" viewBox="0 0 448 512">
          <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"/></svg>
      </div>
    </div>
    <ul className="list list--inline nav__list collapsible__content">
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/">Home</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/vision"  >Vision</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/mission"  >Mission</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/clients"  >Clients</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/services" >Services</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}   to="/why-us" >Why Us</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/contact-us" >Contact Us</NavLink></li>
      <li className="nav__item"><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={()=> setIsOpen(false)}  to="/quote" >Quote</NavLink></li>
      <select name="language"  className='language__input'>
        <option value="EN" onChange={()=>isEnglish ? setIsEnglish(false) : setIsEnglish(true)}> <span className='fi fi-gb'></span> EN</option>
        <option value="AR" onChange={()=>isEnglish ? setIsEnglish(false) : setIsEnglish(true)}> <span className='fi fi-sa'></span>AR</option>
      </select>
    </ul>

</motion.nav>
  )
}

export default Navbar