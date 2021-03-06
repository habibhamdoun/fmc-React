import React, { useRef, useState } from 'react';
import useFirestore from './../hooks/useFirestore';
import { motion } from 'framer-motion';
import { useAppContext } from '../config/Context';
import { useTranslation } from 'react-i18next';
import Moment from 'react-moment';
import useReviews from '../hooks/useReviews';

const Comment = () => {
  const form = useRef();
  const {docs:reviews , loading :reviewsLoading} = useReviews(true);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [commentErrMsg, setCommentErrMsg] = useState('');
  const [isSending,setIsSending]=useState(false);
  const [modal,setModal]=useState(false);
  const { AddReview } = useAppContext();
  const { t,i18n }=useTranslation('translation');
  let Scroll   = require('react-scroll');
  let Element  = Scroll.Element;
  let scroller = Scroll.scroller;
  function handleScroll(){
      scroller.scrollTo("comment", {
        duration: 400,
        delay: 0,
        smooth: true,
        offset:100,
      });
    
  }
  function toggleModal(){
    setModal(old => old ? false : true);
  }
  const handleClick = (e) => {
    e.preventDefault();
    setNameErrMsg('');
    setCommentErrMsg('');
    if(!name){
      setNameErrMsg('Name is required');
    }
    else if(!comment){
      setCommentErrMsg('Comment is required');
    }
    else if(comment.length > 1000){
      setCommentErrMsg('Comment is too long.')
    }
    else if(name.length > 20){
      setNameErrMsg('Your name is too long.')
    }
    else {
      setIsSending(true);
      AddReview(name, comment)
      .then(() => {
        setModal(true);
        setTimeout(()=>{
          setModal(false)
        },3000)
        setName('');
        setComment('')
      }, (error) => {
        console.log(error.text);
        }).finally(()=>{
          setIsSending(false)
        })
    }
  };
  if(reviewsLoading){
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    <section className='feedback'>
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
        <section className='reviews__container'>
        <div className="title">
              <div className="line line--blue"></div>
              <h2 className="title__header">{t("review")}</h2>
              <div className="line line--blue"></div>
          </div>
          {<>
            {reviews.map(review =>(
              <div className='review'>
              <div className="review__id">
                <div className='profile__logo'></div>
                <h3 className='review__name'>{review.name}</h3>
                {/* <Moment format='DD MMM' date={Date(review.timeStamp)} className='timeStamp' /> */}
              </div>
              <p className='review__comment'>{review.comment}</p>
              </div>
            ))}
            </>}
        </section>
        <div className="comments__toggle__container">
          <a onClick={handleScroll}>
            <svg className='comments__toggle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
          </a>
        </div>
      <motion.section 
        className="contact"
        name='comment' 
        initial={{translateY:1000}}
        animate={{translateY:0}}
        transition={{duration:0.4}}
      >
          <div className="title">
              <div className="line line--blue"></div>
              <h2 className="title__header">{t("commentsTitle")}</h2>
              <div className="line line--blue"></div>
          </div>
        <form ref={form} onSubmit={handleClick} id="contact-form" className="contact__field" autoComplete="off">
          <label className={i18n.language=='ar'?'label arabic label--arabic':'label'}>{t("contactName")}</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            id="nameInput"
            name="user_name"
            className="contact__item contact__input"
            />
          {nameErrMsg && <p className='errMsg'>{nameErrMsg}</p>}
          <label className={i18n.language=='ar'?'label arabic label--arabic':'label'}>{t("comment")} :</label>
          <textarea
            id="commentInput"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            name="comment"
            className="contact__item contact__message"
            />
            {commentErrMsg && <p className='errMsg'>{commentErrMsg}</p>}
            <button
          disabled={isSending}
          type="submit"
          id='contactBtn'
          className="btn btn--primary contact__btn"
          >{isSending ? <span>{t('contactBtnSending')}</span>:<span>{t('comment')}</span>}</button>
        </form>
      </motion.section>
    </section>
  );
};
export default Comment