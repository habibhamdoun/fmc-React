import React, { useState } from 'react'

const Modal = () => {
    const [modal,setModal]=useState(false);
    function toggleModal(){
        setModal(!modal)
    }
  return (
    <>
     {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Message Sent!</h2>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal