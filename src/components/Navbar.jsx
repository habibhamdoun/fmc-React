import React from 'react'
import Image from '../images/logo-fmc-removebg-preview.webp'

const Navbar = () => {
  return (
    <nav class="nav collapsible" id="nav" data-aos="zoom-in-up">
    <div class="nav__brand__container">
        <img src={Image} class="nav__brand" alt="" />
        <div class="nav__collapsible__container"><svg xmlns="http://www.w3.org/2000/svg" class="collapsible__toggle" viewBox="0 0 448 512"><path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"/></svg>
        </div>
    </div>
    <ul class="list list--inline nav__list collapsible__content">
        <li class="nav__item current-tab"><a href="./index.html">Home</a></li>
        <li class="nav__item"><a href="./vision-page.html">Vision</a></li>
        <li class="nav__item"><a href="./mission-page.html">Mission</a></li>
        <li class="nav__item"><a href="./clients-page.html">Clients</a></li>
        <li class="nav__item"><a href="./services-page.html">Services</a></li>
        <li class="nav__item"><a href="./whyus-page.html">Why Us</a></li>
        <li class="nav__item"><a href="./contact-page.html">Contact Us</a></li>
    </ul>
</nav>
  )
}

export default Navbar