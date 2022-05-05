import React from 'react'
import Client1 from "../images/client-1-removebg-preview.webp"
import Client2 from "../images/client-2-removebg-preview.webp"
import Client3 from "../images/client-3-removebg-preview.webp"
import Client4 from "../images/client-4.2.webp"
import Client5 from "../images/client-5-removebg-preview.webp"
import Client6 from "../images/client-6-removebg-preview.webp"
const Clients = ({isMobile}) => {
  return (
    <section className="clients" data-aos={isMobile ? '' :"zoom-out"}>
    <h1 className="clients__header">
        <div className="title">
            <div className="line line--blue"></div>
            <h2 className="title__header">Our Clients</h2>
            <div className="line line--blue"></div>
        </div>
    </h1>
    <div className="clients__icons">
            <a href="https://ae.elnlondon.com/" className="client__img" target="_blank"><img src={Client1}  alt=""/></a>
            <a href="http://kababji.com/#!/" className="client__img" target="_blank"><img src={Client2}  alt=""/></a>
            <a href="https://saudi-technical.com/" className="client__img" target="_blank"><img src={Client3}  alt=""/></a>
            <a href="https://www.jumlaty.app/" className="client__img" target="_blank"><img src={Client4}  alt=""/></a>
            <a href="https://www.sushiart.sa/" className="client__img" target="_blank"><img src={Client5}  alt=""/></a>
            <a href="https://www.woodenbakery.com/" className="client__img" target="_blank"><img src={Client6}  alt=""/></a>
    </div>
    </section>
  )
}

export default Clients