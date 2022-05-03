import React from 'react'

const WhyUs = () => {
  return (
    <section className="whyUs">
    <div className="whyUs__header" data-aos="fade-left">
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
    <button className="btn btn--outline btn--secondary whyUs__btn" data-aos="fade-left"><a href="./contact-page.html">Contact Us</a></button>
    <div className="whyUs__img" data-aos="fade-right"></div>
    <div className="img__bg"></div>
</section>
  )
}

export default WhyUs