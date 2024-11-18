import { faCaretRight, faClipboardCheck, faCode, faFlag, faForward, faLaptop, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id='service' className='bg-[#0e0e0e] text-white lg:h-[100vh] py-[3rem] lg:px-[8rem] px-[2rem] text-center lg:text-start'>
      <h2 className='font-fontNunito text-xl font-semibold'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />My Services</h2>
      <h3 className='text-2xl font-semibold font-fontPrompt'>- What Can I Do</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-[3rem] lg:gap-[2rem] gap-[1rem]'>
        <ServiceCard icon={faPen} heading={'Creative Design'} paragraph={'I create innovative, visually stunning designs that engage users, combining aesthetics and functionality seamlessly.'} />
        <ServiceCard icon={faCode} heading={'Clean Code'} paragraph={'My code is clean, efficient, and maintainable, ensuring scalability and easy future updates for projects.'} />
        <ServiceCard icon={faLaptop} heading={'User Interface'} paragraph={'I design intuitive user interfaces that provide smooth interactions and enhance the overall user experience.'} />
        <ServiceCard icon={faClipboardCheck} heading={'User Experience'} paragraph={'My focus is on delivering seamless, user-friendly experiences that engage users and drive satisfaction.'} />
        <ServiceCard icon={faForward} heading={'Fast Support'} paragraph={'I provide fast, reliable support, ensuring timely solutions and maintaining client satisfaction throughout project lifecycles.'} />
        <ServiceCard icon={faFlag} heading={'Branding'} paragraph={'I build strong, memorable brands that connect with audiences and communicate a clear, consistent identity.'} />
      </div>
    </div>
  )
}

export default Services
