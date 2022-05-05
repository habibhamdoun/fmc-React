import React from "react";
function Hero({isMobile}) {
  return (
    <section className="hero" data-aos={isMobile ? '' :"zoom-in-up"} data-aos-anchor='#nav' >
      <div className="hero__image"></div>
      <div className="hero__content">
        <h1 className="hero__header">
          First Modern <br /> Company
        </h1>
        <a href="#aboutUs" className="hero__toggle">
          <div className="hero__link">
            <p>Learn More</p>
            <svg xmlns="http://www.w3.org/2000/svg" className='hero__arrow'viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/></svg>
          </div>
        </a>
      </div>
    </section>
  );
}
export default Hero;
