import React ,{useState} from 'react';
import { useAppContext } from '../config/Context';
import { motion } from 'framer-motion';



const Quote = () => {
    const { order } = useAppContext();
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [additionalInfo, setInfo] = useState('');
  const [locationErrMsg, setLocationErrMsg] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [modal,setModal]=useState(false);
  const [isSending,setIsSending]=useState(false);

  function toggleModal(){
    setModal(old => old ? false : true);
  }

  function handleClick(){
    setNameErrMsg('');
    setEmailErrMsg('');
    if(!email){
      setEmailErrMsg('Email is required');
    }
    else if(!name){
      setNameErrMsg('Name is required');
    }
    else if(name.length > 20){
      setNameErrMsg('Your name is too long.')
    }
    else{
        setIsSending(true);
        order(location, companyName,email,name, PhoneNumber,additionalInfo)
        .then(() => {
          setModal(true);
          setTimeout(()=>{
            setModal(false)
          },3000)
          setName('');
          setEmail('');
          setPhoneNumber('');
          setInfo('');
          setCompanyName('');
          setLocation('');
        }, (error) => {
          console.log(error.text);
          }).finally(()=>{
            setIsSending(false)
          })
    }
  }
  return (
      <motion.section className='quote'
      initial={{translateY:1000}}
      animate={{translateY:0}}
      transition={{duration:0.4}}
        >
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
              <h2>Quote Sent!</h2>
            </motion.div>
          </div>
        )}
          <div className="title">
              <div className="line line--blue"></div>
                <h2 className="title__header">Quote</h2>
              <div className="line line--blue"></div>
          </div>
          <div className="quote__field">
              <label className='label'>Location:</label>
              <input 
                value={location} 
                onChange={(e)=>setLocation(e.target.value)} 
                type="text" 
                className='quote__input' 
              />
              <label className='label'>Company Name (optional):</label>
              <input 
                value={companyName} 
                onChange={(e)=>setCompanyName(e.target.value)} 
                type="text" 
                className='quote__input'
              />
              <label className='label'>Email:</label>
              <input 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                type="email" 
                className='quote__input' 
              />
              {emailErrMsg && <p className='errMsg'>{emailErrMsg}</p>}
              <label className='label'>Name:</label>
              <input 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                type="text" 
                className='quote__input' 
              />
              {nameErrMsg && <p className='errMsg'>{nameErrMsg}</p>}
              <label className='label'>Phone Number (optional):</label>
              <input 
                value={PhoneNumber} 
                onChange={(e)=>setPhoneNumber(e.target.value)} 
                type="text" 
                className='quote__input' 
              />
              <label className='label'>Additional info(optional):</label>
              <textarea value={additionalInfo} onChange={(e)=>setInfo(e.target.value)} type="text" className='quote__input quote__textarea' />
          </div>
          <button className='btn btn--secondary quote__btn' onClick={handleClick}>{isSending ? 'Sending...': 'Send Quote'}</button>
      </motion.section>
  )
}

export default Quote