import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  message: yup.string().min(5).max(1000).required()
})

const ContactUs = ({isMobile}) => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');
  const [modal,setModal]=useState(false);
    function toggleModal(){
        setModal(old => old ? false : true);
    }
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
    else {
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setModal(true);
        setTimeout(()=>{
          setModal(false)
        },3000)
        setName('');
        setEmail('')
        setMessage('')
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
    <>
      {!modal && (
          <div className="modal">
            {/* <div onClick={toggleModal} className="overlay"></div> */}
            <div className="modal-content">
            <svg xmlns="http://www.w3.org/2000/svg" className='modal__icon' viewBox="0 0 640 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"/></svg>
              <h2>Message Sent!</h2>
            </div>
          </div>
        )}
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
    </>
  );
};
export default ContactUs