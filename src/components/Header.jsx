import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Header = () => {

  const ezemmetLogo = '<ezemmet/>'
  const eLogo = '<e/>'

  const [menu, setMenu] = useState('hidden')

  const handleToggleMenu = () => {
    if (menu === 'hidden') {
      setMenu('block')
    }
    else {
      setMenu('hidden')
    }
  }

  return (
    <div className='grid grid-cols-2 items-center h-[10vh] bg-[#000000] text-white px-[3rem] lg:px-[10rem]'>
      <div>
        <p className='text-2xl font-fontPrompt text-red-600 hidden md:block'>{ezemmetLogo}</p>
        <p className='text-2xl font-fontPrompt text-red-600 block md:hidden'>{eLogo}</p>
      </div>
      <div className='text-end'>
        <FontAwesomeIcon onClick={handleToggleMenu} icon={faBars} className='md:hidden text-2xl cursor-pointer' />
        <div className={`absolute right-0 top-[10%] md:top-0 ${menu} md:relative md:block`}>
          <ul className='md:flex text-center md:justify-end font-fontKanit bg-[#000000d7] md:bg-transparent'>
            <li className='px-5 hover:text-red-600'><a href="/home">Home</a></li>
            <li className='px-5 hover:text-red-600'><a href="/about">About</a></li>
            <li className='px-5 hover:text-red-600'><a href="/resume">Resume</a></li>
            <li className='px-5 hover:text-red-600'><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
