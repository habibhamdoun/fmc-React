import React,{useState} from "react";
import Image from "../images/aboutus-bg.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function About({isMobile}) {
  const { t }=useTranslation('translation');

  return (
    <section className='aboutUs' id="aboutUs">
    <div className="title">
             <h3 className="title__header aboutUs__title">About Us
           </h3>
           <div className="line line--blue"></div>
       </div>
    <div className="aboutUs__card__container">
            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"}>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z"/></svg>
              </div>
            <div className="title">
             <h4 className="title__header aboutUs__title">{t("whoTitle")}
           </h4>
           <div className="line"></div>
       </div>
            <div className='aboutUs__text'>
              <p>
              "FMC Is A Fully Integrated Specialized International Logistics Service Provider With Vast Experience In Freight Forwarding Custom Clearance, Warehousing, Fulfillment And Last Mile And Project Cargo Handling."
              </p>
            </div>
            </div>

            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"}>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z"/></svg>
              </div>
            <div className="title">
             <h4 className="title__header aboutUs__title">Our Location
           </h4>
           <div className="line"></div>
       </div>
            <div className='aboutUs__text'>
              <p>
               Based In Riyadh, Kingdom Of Saudi Arabia, We Aim At Offering You With Complete Logistics Services And Solutions Integrated With Your Business.
               </p>
            </div>
            </div>

            <div className='aboutUs__card' data-aos={isMobile ? '' :"fade-up"}>
              <div className='aboutUs__icon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z"/></svg>
              </div>
            <div className="title">
             <h4 className= "title__header aboutUs__title"> Our Scale
           </h4>
           <div className="line"></div>
       </div>
            <div className='aboutUs__text'>
              <p>
              Our Scale Of Expertise And Operation Enable Us To Provide Appropriate Solutions Ranging From Complex Logistic Solutions Along Individual Logistics Services, Namely Transport Solutions, Storage, Distribution Logistics And Out Sourcing Solutions.
              </p>
            </div>
            </div>
            
    </div>
    <Link to='/vision'>
           <a className="btn btn--outline btn--primary aboutUs__btn">
             Read More
           </a>
        </Link>
  </section>
  );
}
export default About;
