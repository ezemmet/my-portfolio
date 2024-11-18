import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#000000] text-white grid lg:grid-cols-12 items-center lg:h-[20vh] lg:gap-x-4 lg:px-[8rem] px-[1rem] text-center'>
      <div className='lg:col-span-3 text-center lg:text-start mt-[2rem] lg:mt-0'>
        <h4 className='text-xl font-fontPrompt'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />GET IN TOUCH</h4>
        <p className='font-fontPrompt mt-2 text-sm'><FontAwesomeIcon className='text-red-600' icon={faEnvelope} /> nitinsharmaofficial11@gmail.com</p>
        <p className='font-fontPrompt'><FontAwesomeIcon className='text-red-600' icon={faPhone} /> 0123456789</p>
      </div>

      <div className='border-x-2 border-red-600 lg:col-span-6 font-fontNunito text-sm mt-[2rem] lg:mt-0'>
        All Right Reserved | Copyright © 2024-25 | NITIN SHARMA ( ezemmet )
      </div>

      <div className='lg:col-span-3 mt-[2rem] lg:mt-0'>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/github"><FontAwesomeIcon icon={faGithub} /></a>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/instagram"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

export default Footer
