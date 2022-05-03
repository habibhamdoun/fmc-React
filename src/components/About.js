import React from "react";
import Image from "../images/aboutus-bg.webp";

function About() {
  return (
    <section className="about grid grid--1x2" id="aboutUs">
      <div className="about__content" data-aos="fade-right">
        <h3 className="about__title">
          <div className="title">
            <h3 className="title__header">About Us</h3>
            <div className="line line--blue"></div>
          </div>
        </h3>
        <p className="about__text">
          FMC Is a fully integrated and specialized international logistics
          service provider with vast experience in freight forwarding custom
          clearance, warehousing, fulfillment and last mile and project cargo
          handling. Based in Riyadh, kingdom of Saudi Arabia, we aim at offering
          you with complete logistics services and solutions integrated with
          your business. Our scale of expertise and operation enable us to
          provide appropriate solutions ranging from complex logistic solutions
          along individual logistics services, namely transport solutions,
          storage, distribution logistics and out sourcing solutions.
        </p>
        <button className="btn btn--outline btn--primary about__btn">
          <a href="./vision-page.html">Read More</a>
        </button>
      </div>
      <img src={Image} data-aos="fade-left" className="about__img" alt="" />
    </section>
  );
}
export default About;
