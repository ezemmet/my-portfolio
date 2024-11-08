import { faCaretRight, faClipboardCheck, faCode, faFlag, faForward, faLaptop, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='bg-[#0e0e0e] text-white h-[100vh] py-[3rem] px-[8rem]'>
      <h2 className='font-fontNunito text-xl font-semibold'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />My Services</h2>
      <h3 className='text-2xl font-semibold font-fontPrompt'>- What Can I Do</h3>
      <div className='grid md:grid-cols-3 mt-[3rem] gap-[2rem]'>
        <ServiceCard icon={faPen} heading={'Creative Design'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
        <ServiceCard icon={faCode} heading={'Clean Code'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
        <ServiceCard icon={faLaptop} heading={'User Interface'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
        <ServiceCard icon={faClipboardCheck} heading={'User Experience'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
        <ServiceCard icon={faForward} heading={'Fast Support'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
        <ServiceCard icon={faFlag} heading={'Branding'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta facilis delectus iusto autem cum.'} />
      </div>
    </div>
  )
}

export default Services
