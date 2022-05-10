import React,{useEffect,useState} from 'react';
import { motion } from 'framer-motion';

const Alert = ({p}) => {
    const [alert ,setAlert]=useState(false)
    function callAlert(){
        setTimeout(()=>setAlert(true),2000)  
      setTimeout(()=>setAlert(false),7000)  
    }
    useEffect(callAlert,[])
  return (
    <motion.div 
        className='alert'
        initial={{
            translateX:'100vw',
            skew:10
        }}
        animate={!alert?{
            translateX:'100vw',
            skew:10
        }:{
            translateX:0,
        }}
        transition={{
            duration:1,
            ease:'easeInOut',
        }}
        >
            <p> {p}</p>

        </motion.div>
  )
}

export default Alert