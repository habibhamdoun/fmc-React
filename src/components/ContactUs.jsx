import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  message: yup.string().min(5).max(1000).required()
})

const ContactUs = (isMobile) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setNameErrMsg('');
    setEmailErrMsg('');
    setMessageErrMsg('');
    if(!name){
      setNameErrMsg('Name is required');
    }
    else if(!email){
      setEmailErrMsg('Email is required');
    }
    else if(!message){
      setMessageErrMsg('Message is required');
    }
    else if(message.length > 1000){
      setMessageErrMsg('Message is too long.')
    }
    else if(name.length > 20){
      setNameErrMsg('Your name is not that long, change it bitch, or elseeeee, i will fuck your mom,mhuahahahah, that was my dumb cousin,no it was professor x, that was him again, Aany way fuck you.')
    }
    else if(!nameErrMsg && !emailErrMsg && !messageErrMsg){
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      // const data = {
      //   user_name: name,
      //   user_email: email,
      //   message: message
      // }
      // schema.validate({name, email, message}).then(()=>{
        // }).catch((err)=>{
          //   console.log(err)
          // });
        });
    }
  };

  return (
    <section className="contact" data-aos={isMobile ? '' : "fade-up"}>
        <div className="title">
            <div className="line line--blue"></div>
            <h2 className="title__header">Contact Us</h2>
            <div className="line line--blue"></div>
        </div>
      <form ref={form} onSubmit={sendEmail} id="contact-form" className="contact__field" autoComplete="off">
        <label className='label'>Name:</label>
        <input 
          type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          id="nameInput" 
          name="user_name" 
          className="contact__item contact__input" 
        />
        {nameErrMsg && <p className='errMsg'>{nameErrMsg}</p>}
        <label className='label'>Return Email:</label>
        <input 
          id="emailInput"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"  
          name="user_email" 
          className="contact__item contact__input"
          />
        {emailErrMsg && <p className='errMsg'>{emailErrMsg}</p>}
        <label className='label'>Message:</label>
        <textarea 
          id="messageInput"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          name="message" 
          className="contact__item contact__message" 
          />
          {messageErrMsg && <p className='errMsg'>{messageErrMsg}</p>}
        <input 
        type="submit" 
        id='contactBtn' 
        className="btn btn--primary contact__btn" 
        value="Send" 
        />
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