import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Header = () => {

  const ezemmetLogo = '<ezemmet/>'

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
    <div id='header' className='grid grid-cols-2 items-center h-[10vh] bg-[#000000] text-white px-[3rem] lg:px-[10rem]'>
      <div>
        <p className='text-lg md:text-2xl font-fontPrompt text-red-600'>{ezemmetLogo}</p>
      </div>
      <div className='text-end'>
        <FontAwesomeIcon onClick={handleToggleMenu} icon={faBarsStaggered} className='md:hidden text-2xl cursor-pointer' />
        <div className={`absolute right-0 top-[10%] md:top-0 ${menu} md:relative md:block w-full`}>
          <ul className='md:flex text-center md:justify-end font-fontKanit bg-[#000000b0] md:bg-transparent'>
            <li className='px-5 hover:text-red-600'><a href="#home">Home</a></li>
            <li className='px-5 hover:text-red-600'><a href="#about">About</a></li>
            <li className='px-5 hover:text-red-600'><a href="#resume">Resume</a></li>
            <li className='px-5 hover:text-red-600'><a href="#service">Service</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
