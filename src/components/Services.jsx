import React  from 'react';
import { motion } from 'framer-motion';
import Alert from './Alert';


const Services = ({isMobile}) => {
    
  return (
    <motion.section className="services" 
    initial={{translateY:1000}}
    animate={{translateY:0}}
    transition={{duration:0.4}}
    >
        <div className="right--side">
            <motion.div initial={{translateX:-1000}} animate={{translateX:0}} transition={{duration:0.35}} className="triangle triangle--right triangle--top triangle--red" data-aos={isMobile ? '' :"fade-right"}></motion.div>
            <motion.div initial={{translateX:-1000}} animate={{translateX:0}} transition={{duration:0.4}} className="triangle triangle--right triangle--bottom triangle--blue" data-aos={isMobile ? '' :"fade-right"}></motion.div>
        </div>
        <div className="services__title">
            <div className="title">
                <div className="line line--blue"></div>
                <h2 className="title__header">Our Services</h2>
                <div className="line line--blue"></div>
            </div>
        </div>
        <Alert 
        p={isMobile ?'Click on icons for details' :"Hover over icons for details"}
        />
    <div className="row row--3">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M484.6 62C502.6 52.8 522.6 48 542.8 48H600.2C627.2 48 645.9 74.95 636.4 100.2C618.2 148.9 582.1 188.9 535.6 212.2L262.8 348.6C258.3 350.8 253.4 352 248.4 352H110.7C101.4 352 92.5 347.9 86.42 340.8L13.34 255.6C6.562 247.7 9.019 235.5 18.33 230.8L50.49 214.8C59.05 210.5 69.06 210.2 77.8 214.1L135.1 239.1L234.6 189.7L87.64 95.2C77.21 88.49 78.05 72.98 89.14 67.43L135 44.48C150.1 36.52 169.5 35.55 186.1 41.8L381 114.9L484.6 62zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480z"/></svg>
                        <h4 className="icon__header">Air Freight</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Another term for air cargo that is, the shipment of products through an air carrier</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg>
                        <h4 className="icon__header">Land Freight</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Movement of cargo from point A to point B by road through trucks or railway.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M541.2 448C542.1 453 544.1 458.4 544.1 464C544.1 490.5 522.6 512 496 512C469.5 512 448.1 490.5 448.1 464C448.1 458.4 449.2 453 450.1 448H253.1C254.9 453 256 458.4 256 464C256 490.5 234.5 512 208 512C181.5 512 160 490.5 160 464C160 458.4 161.1 453 162.9 448L96 448C78.4 448 64 433.6 64 416V80C64 71.16 56.84 64 48 64H32C14.4 64 0 49.6 0 32C0 14.4 14.4 0 32 0H64C99.2 0 128 28.8 128 64V384H608C625.6 384 640 398.4 640 416C640 433.6 625.6 448 608 448L541.2 448zM432 0C458.5 0 480 21.5 480 48V320H288V48C288 21.5 309.5 0 336 0H432zM336 96H432V48H336V96zM256 320H224C206.4 320 192 305.6 192 288V128C192 110.4 206.4 96 224 96H256V320zM576 128V288C576 305.6 561.6 320 544 320H512V96H544C561.6 96 576 110.4 576 128z"/></svg>
                        <h4 className="icon__header">Custom clearance</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Customs clearance is a necessary procedure before products and shipments can be imported or exported internationally.</p>
                    </div>
                </div>
            </div>
        </div>
    <div className="row row--2">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512"><path d="M32 448c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V128H32V448zM96 304C96 295.2 103.2 288 112 288H160V240C160 231.2 167.2 224 176 224h32C216.8 224 224 231.2 224 240V288h48C280.8 288 288 295.2 288 304v32c0 8.799-7.199 16-16 16H224v48c0 8.799-7.199 16-16 16h-32C167.2 416 160 408.8 160 400V352H112C103.2 352 96 344.8 96 336V304zM360 0H24C10.75 0 0 10.75 0 24v48C0 85.25 10.75 96 24 96h336C373.3 96 384 85.25 384 72v-48C384 10.75 373.3 0 360 0z"/></svg>
                        <h4 className="icon__header">pharma logistics</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Pharmaceutical logistics is related to the handling, transport and chain management of multiple and varied products.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z"/></svg>
                        <h4 className="icon__header">Packing & relocating</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Packing and transfering products all around the globe.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row row--1">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><path d="M192 32C192 14.33 206.3 0 224 0H352C369.7 0 384 14.33 384 32V64H432C458.5 64 480 85.49 480 112V240L524.4 254.8C547.6 262.5 553.9 292.3 535.9 308.7L434.9 401.4C418.7 410.7 400.2 416.5 384 416.5C364.4 416.5 343.2 408.8 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C234 407.9 213.2 416.5 192 416.5C175.8 416.5 157.3 410.7 141.1 401.3L40.09 308.7C22.1 292.3 28.45 262.5 51.59 254.8L96 239.1V111.1C96 85.49 117.5 63.1 144 63.1H192V32zM160 218.7L267.8 182.7C280.9 178.4 295.1 178.4 308.2 182.7L416 218.7V128H160V218.7zM384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448H384z"/></svg>
                        <h4 className="icon__header">sea Freight</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>A method of transporting large quantities of products via cargo ships.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row row--2">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"/></svg>
                        <h4 className="icon__header">DGR</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Dangerous Goods Regulations manual used to make sure dangerous products are transported safely and efficiently.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M0 488V171.3C0 145.2 15.93 121.6 40.23 111.9L308.1 4.753C315.7 1.702 324.3 1.702 331.9 4.753L599.8 111.9C624.1 121.6 640 145.2 640 171.3V488C640 501.3 629.3 512 616 512H568C554.7 512 544 501.3 544 488V223.1C544 206.3 529.7 191.1 512 191.1H128C110.3 191.1 96 206.3 96 223.1V488C96 501.3 85.25 512 72 512H24C10.75 512 0 501.3 0 488zM152 512C138.7 512 128 501.3 128 488V432H512V488C512 501.3 501.3 512 488 512H152zM128 336H512V400H128V336zM128 224H512V304H128V224z"/></svg>
                        <h4 className="icon__header">Warehousing & distribution</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>A warehouse is used for storing products while a distribution center, apart from storing products offers value-added services</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row row--3">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                        <h4 className="icon__header">cargo insurance</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Cargo insurance is the method used in protecting shipments from physical damage or theft</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 512"><path d="M640 .0003V400C640 461.9 589.9 512 528 512C467 512 417.5 463.3 416 402.7L48.41 502.9C31.36 507.5 13.77 497.5 9.126 480.4C4.48 463.4 14.54 445.8 31.59 441.1L352 353.8V64C352 28.65 380.7 0 416 0L640 .0003zM528 352C501.5 352 480 373.5 480 400C480 426.5 501.5 448 528 448C554.5 448 576 426.5 576 400C576 373.5 554.5 352 528 352zM23.11 207.7C18.54 190.6 28.67 173.1 45.74 168.5L92.1 156.1L112.8 233.4C115.1 241.9 123.9 246.1 132.4 244.7L163.3 236.4C171.8 234.1 176.9 225.3 174.6 216.8L153.9 139.5L200.3 127.1C217.4 122.5 234.9 132.7 239.5 149.7L280.9 304.3C285.5 321.4 275.3 338.9 258.3 343.5L103.7 384.9C86.64 389.5 69.1 379.3 64.52 362.3L23.11 207.7z"/></svg>
                        <h4 className="icon__header">project cargo</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Also known as project forwarding or project logistics, is the transportation of large, complex, or high-value pieces of equipment.</p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="icon__container flip-card-front">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><path d="M352 0C369.7 0 384 14.33 384 32H459.1C479.7 32 490.7 56.29 477.2 71.8L456 96H119.1L98.83 71.8C85.25 56.29 96.27 32 116.9 32H191.1C191.1 14.33 206.3 0 223.1 0L352 0zM95.1 128H480C497.7 128 512 142.3 512 160V283.5C512 296.8 507.8 309.8 500.1 320.7L448.7 392.6C446.8 393.7 444.1 394.9 443.2 396.1C427.7 406.8 409.1 414.2 392.1 416H375.6C358.5 414.2 340.6 406.1 324.8 396.1C302.8 380.6 273.3 380.6 251.2 396.1C236.3 406.3 218.7 414.1 200.5 416H183.9C166.9 414.2 148.3 406.8 132.9 396.1C131.1 394.8 129.2 393.7 127.3 392.6L75.92 320.7C68.17 309.8 64 296.8 64 283.5V160C64 142.3 78.33 128 96 128H95.1zM127.1 288H448V192H127.1V288zM384 448C410.9 448 439.4 437.2 461.4 421.9L461.5 421.9C473.4 413.4 489.5 414.1 500.7 423.6C515 435.5 533.2 444.6 551.3 448.8C568.5 452.8 579.2 470.1 575.2 487.3C571.2 504.5 553.1 515.2 536.7 511.2C512.2 505.4 491.9 494.6 478.5 486.2C449.5 501.7 417 512 384 512C352.1 512 323.4 502.1 303.6 493.1C297.7 490.5 292.5 487.8 288 485.4C283.5 487.8 278.3 490.5 272.4 493.1C252.6 502.1 223.9 512 192 512C158.1 512 126.5 501.7 97.5 486.2C84.12 494.6 63.79 505.4 39.27 511.2C22.06 515.2 4.853 504.5 .8422 487.3C-3.169 470.1 7.532 452.8 24.74 448.8C42.84 444.6 60.96 435.5 75.31 423.6C86.46 414.1 102.6 413.4 114.5 421.9L114.6 421.9C136.7 437.2 165.1 448 192 448C219.5 448 247 437.4 269.5 421.9C280.6 414 295.4 414 306.5 421.9C328.1 437.4 356.5 448 384 448H384z"/></svg>
                        <h4 className="icon__header">break bulk & roro services</h4>
                    </div>
                    <div className="flip-card-back">
                        <p>Breakbulk ocean shipping is a common method used to successfully transport cargo or goods that cannot fit in standard-size shipping containers or cargo bins.RO/RO(Roll On-Roll Off) is typically used when transporting breakbulk shipments. Most heavy breakbulk shipments use RO/RO and avoid fees</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="left--side">
            <motion.div initial={{translateX:1000}} animate={{translateX:0}} transition={{duration:0.35}} className="triangle triangle--left triangle--top triangle--blue" data-aos={isMobile ? '' :"fade-left"}></motion.div>
            <motion.div initial={{translateX:1000}} animate={{translateX:0}} transition={{duration:0.4}} className="triangle triangle--left triangle--bottom triangle--red" data-aos={isMobile ? '' :"fade-left"}></motion.div>
        </div>
    </motion.section>
  )
}

export default Services
