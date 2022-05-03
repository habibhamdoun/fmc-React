import React from "react";
function Hero() {
  return (
    <section className="hero" data-aos="zoom-in-up">
      <div className="hero__image"></div>
      <div className="hero__content">
        <h1 className="hero__header">
          First Modern <br /> Company
        </h1>
        <a href="#aboutUs" className="hero__toggle">
          <p>Learn More</p>
          <i className="fa-solid fa-chevron-down hero__arrow"></i>
        </a>
      </div>
    </section>
  );
}
export default Hero;
