import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'

const Header = () => {

  const ezemmetLogo = '<ezemmet/>'

  const [menu, setMenu] = useState('right-[-50%]')

  const handleToggleMenu = () => {
    if (menu === 'right-[-50%]') {
      setMenu('right-[0%]')
    }
    else {
      setMenu('right-[-50%]')
    }
  }

  return (
    <div className='grid grid-cols-2 items-center h-[10vh] bg-[#0c0c0c] text-white px-[3rem] lg:px-[10rem]'>
      <div>
        <p className='text-2xl font-fontPrompt text-red-600'>{ezemmetLogo}</p>
      </div>
      <div className='text-end'>
        <FontAwesomeIcon onClick={handleToggleMenu} icon={faBars} className='md:hidden text-2xl cursor-pointer' />
        <div className={`absolute transition-right duration-100 ease-in-out ${menu} md:relative md:block md:right-0`}>
          <ul className='md:flex justify-end font-fontKanit bg-black'>
            <li className='px-5'><a href="/home">Home</a></li>
            <li className='px-5'><a href="/about">About</a></li>
            <li className='px-5'><a href="/resume">Resume</a></li>
            <li className='px-5'><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
