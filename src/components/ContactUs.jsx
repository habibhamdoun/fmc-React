import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  function check(){
    if(document.getElementById('nameInput').value === ''){
      document.getElementById('errorTextName').innerText='Please type in a Name!';
      console.log('invalid name')
      return
    }
    else if(document.getElementById('emailInput').value === ''){
      document.getElementById('errorTextEmail').innerText='Please type in an Email!';
      return
    }
    else if(document.getElementById('messageInput').value === ''){
      document.getElementById('errorTextMessage').innerText='Please type in a Message!';
      return
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className="contact" data-aos="fade-up">
        <div className="title">
            <div className="line line--blue"></div>
            <h2 className="title__header">Contact Us</h2>
            <div className="line line--blue"></div>
        </div>
      <form ref={form} onSubmit={sendEmail} id="contact-form" className="contact__field" autoComplete="off">
        <label className='label'>Name:</label>
        <input tid="nameInput" type="text" name="user_name" className="contact__item contact__input" />
        <h6 id="errorTextName"></h6>
        <label className='label'>Return Email:</label>
        <input id="emailInput" type="email" name="user_email" className="contact__item contact__input"/>
        <h6 id="errorTextEmail"></h6>
        <label className='label'>Message:</label>
        <textarea id="messageInput" name="message" className="contact__item contact__message" />
        <h6 id="errorTextMessage"></h6>
        <input id='contactBtn' className="btn btn--primary contact__btn" type="submit" value="Send" onClick={check}/>
      </form>
      <div className="contact__alternative">
        <ul className="list list--inline">
          <li>www.fmc-supplychain.com</li>
          <li>info@fmc-supplychain.com</li>
          <li>Saudi Arabia- Al Riyadh</li>
          <li>00966507885696</li>
          <li><a href="https://www.linkedin.com/in/first-modern-company-fmc-99bb90231/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className='contact__icon'viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ContactUs