import React from 'react'

const Mission = ({isMobile}) => {
  return (
    <section className="section" data-aos={isMobile ? '' :"fade-down"}>
        <div className="section__img" data-aos={isMobile ? '' :"fade-down"}></div>
        <div className="section__content">
            <div className="title">
                <h2 className="title__header">Our Mission</h2>
                <div className="line line--blue"></div>
            </div>
            <p>We ensure to provide  
                our valuable customers      
                with an end-to-end (E2E)  
                supply Chain management  
                services to enable their  
                business demands. We  
                imprint the Core value in  
                our people to drive FMC  
                in to a customer-centric  
                that enables Innovative  
                modular designs, flexible  
                pricing, effective and  
                efficient solutions That  
                are adaptable to the new  
                business trends.
                </p>
        </div>
    </section>
  )
}

export default Mission