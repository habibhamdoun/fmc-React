import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../config/Context';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');
  const [isSending,setIsSending]=useState(false);
  const [modal,setModal]=useState(false);
  const { sendMessage } = useAppContext();
  const { t,i18n }=useTranslation('translation');

  function toggleModal(){
    setModal(old => old ? false : true);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setNameErrMsg('');
    setEmailErrMsg('');
    setMessageErrMsg('');
    if(!name){
      setNameErrMsg('nameErrMsg');
    }
    else if(!email){
      setEmailErrMsg('emailErrMsg');
    }
    else if(!message){
      setMessageErrMsg('messageErrMsg');
    }
    else if(message.length > 1000){
      setMessageErrMsg('longMessageErrMsg')
    }
    else if(name.length > 20){
      setNameErrMsg('longNameErrMsg')
    }
    else {
      setIsSending(true);
      sendMessage(email, name, message)
      .then(() => {
        setModal(true);
        setTimeout(()=>{
          setModal(false)
        },3000)
        setName('');
        setEmail('')
        setMessage('')
      }, (error) => {
        console.log(error.text);
        }).finally(()=>{
          setIsSending(false)
        })
    }
  };

  return (
    <>
      {modal && (
          <div onClick={toggleModal} className="modal"
          >
            <motion.div 
              className="modal-content"
              initial={{scale:0.1}}
              animate={{scale:1}}
              transition={{duration:0.5}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className='modal__icon' viewBox="0 0 640 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L478.9 160.8C412.3 167.2 356.5 210.8 332.6 270.6L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM294.4 339.2L320.8 319.4C320.3 324.9 320 330.4 320 336C320 378.5 335.1 417.6 360.2 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2zM640 336C640 415.5 575.5 480 496 480C416.5 480 352 415.5 352 336C352 256.5 416.5 192 496 192C575.5 192 640 256.5 640 336zM540.7 292.7L480 353.4L451.3 324.7C445.1 318.4 434.9 318.4 428.7 324.7C422.4 330.9 422.4 341.1 428.7 347.3L468.7 387.3C474.9 393.6 485.1 393.6 491.3 387.3L563.3 315.3C569.6 309.1 569.6 298.9 563.3 292.7C557.1 286.4 546.9 286.4 540.7 292.7H540.7z"/></svg>
              <h2>{t("modalMsg")}</h2>
            </motion.div>
          </div>
        )}
      <motion.section 
        className="contact" 
        initial={{translateY:1000}}
        animate={{translateY:0}}
        transition={{duration:0.4}}
      >
          <div className="title">
              <div className="line line--blue"></div>
              <h2 className="title__header">{t("contactUs")}</h2>
              <div className="line line--blue"></div>
          </div>
        <form ref={form} onSubmit={sendEmail} id="contact-form" className="contact__field" autoComplete="off">
          <label className={i18n.language=='ar'?'label arabic label--arabic':'label'}>{t("contactName")}</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            id="nameInput"
            name="user_name"
            className="contact__item contact__input"
            />
          {nameErrMsg && <p className='errMsg'>{t(nameErrMsg)}</p>}
          <label className={i18n.language=='ar'?'label arabic label--arabic':'label'}>{t('contactEmail')}</label>
          <input
            id="emailInput"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="user_email"
            className="contact__item contact__input"
            />
          {emailErrMsg && <p className='errMsg'>{t(emailErrMsg)}</p>}
          <label className={i18n.language=='ar'?'label arabic label--arabic':'label'}>{t("contactMsg")}</label>
          <textarea
            id="messageInput"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            name="message"
            className="contact__item contact__message"
            />
            {messageErrMsg && <p className='errMsg'>{t(messageErrMsg)}</p>}
            <button
          disabled={isSending}
          type="submit"
          id='contactBtn'
          className="btn btn--primary contact__btn"
          >{isSending ? <span>{t('contactBtnSending')}</span>:<span>{t('contactBtn')}</span>}</button>
        </form>
        <div className="contact__alternative">
          <ul className="list list--inline">
            <li>www.fmc-supplychain.com</li>
            <li><a href="mailto:info@fmc-supplychain.com">info@fmc-supplychain.com</a></li>
            <li>{t('saudiArabiaLocation')}</li>
            <li>+966507885696</li>
            <li><a href="https://www.linkedin.com/in/first-modern-company-fmc-99bb90231/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className='contact__icon'viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
            <a href="https://www.linkedin.com/in/first-modern-company-fmc-99bb90231/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className='contact__icon' viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a>
            </li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};
export default ContactUs