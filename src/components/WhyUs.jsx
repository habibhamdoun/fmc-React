import React from 'react'
import { Link } from 'react-router-dom'

const WhyUs = (isMobile) => {
  return (
    <section className="whyUs">
    <div className="whyUs__header" data-aos={isMobile ? '' :"fade-left"}>
        <div className="title">
            <h3 className="title__header whyUs__title">Why Choose Us?
            </h3>
            <div className="line line--blue"></div>
        </div>
        <p className="whyUs__text">FMC is your reliable cost 
            effective service provider  
            for all logistics and freight  
            needs. Our customer centric  
            approach and dedication to  
            innovation guarantee that  
            we can tailor any solution to meet your exact  
            requirements.  
            Our business culture is based  
            around adapting to our clients  
            and to the latest technologies,  
            so we can provide you with  
            the most efficient services  
            without ever compromising  
            on quality. 
            
            </p>
    </div>
    <button className="btn btn--outline btn--secondary whyUs__btn" data-aos="fade-left"><Link to="/Contact-Us">Contact Us</Link></button>
    <div className="whyUs__img" data-aos={isMobile ? '' :"fade-right"}></div>
    <div className="img__bg"></div>
</section>
  )
}

export default WhyUs