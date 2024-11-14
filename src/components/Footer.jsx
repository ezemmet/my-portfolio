import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#000000] text-white grid grid-cols-12 items-center h-[20vh] gap-x-4 px-[8rem] text-center'>
      <div className='col-span-3 text-start'>
        <h4 className='text-xl font-fontPrompt'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />GET IN TOUCH</h4>
        <p className='font-fontJosefin mt-2'><FontAwesomeIcon className='text-red-600' icon={faEnvelope} /> nitinsharmaofficial11@gmail.com</p>
        <p className='font-fontPrompt'><FontAwesomeIcon className='text-red-600' icon={faPhone} /> 0123456789</p>
      </div>

      <div className='border-x-2 border-red-600 col-span-6 font-fontNunito text-sm'>
        All Right Reserved | Copyright © 2024-25 | NITIN SHARMA ( ezemmet )
      </div>

      <div className='col-span-3'>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/github"><FontAwesomeIcon icon={faGithub} /></a>
        <a className='text-2xl px-3 text-red-500 hover:text-red-600' href="/instagram"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

export default Footer
