import { faCaretRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const About = () => {
    return (
        <div className='bg-[#1d1d1d] text-white grid md:grid-cols-12 h-[70vh] px-[5rem] py-[3rem]'>
            <div className='col-span-4 px-[3rem] py-[1rem]'>
                <div className='h-full "w-full bg-gradient-to-b from-red-600 to-black via-black" rounded'>
                    {/* <img src={} alt="Nitin Sharma"/> */}
                </div>
            </div>

            <div className='col-span-8 px-[2rem] py-[1rem]'>
                <h2 className='font-fontNunito text-xl font-semibold'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />About me</h2>
                <h3 className='text-2xl font-semibold font-fontPrompt'>- Who Am I</h3>
                <p className='text-sm mt-8 font-fontNunito'>Hi, I'm Nitin Sharma, a passionate Frontend Developer with a keen eye for creating intuitive, user-friendly web experiences. Under the username ezemmet, I specialize in transforming ideas into responsive, visually stunning websites using the latest web technologies like HTML, CSS, JavaScript, and React. I’m driven by a desire to write clean, efficient code that not only meets user expectations but exceeds them. Whether it’s turning complex designs into seamless UI or optimizing performance, I strive to deliver pixel-perfect results. My goal is to build websites that are not only beautiful but also functional and accessible for all users. Let’s collaborate to bring your digital vision to life!</p>
                <button className='font-fontNunito hover:text-red-600 mt-8 border-2 border-red-600 rounded px-3 py-1'>Download Resume <FontAwesomeIcon icon={faDownload} className='ml-1 text-red-600' /></button>
            </div>
        </div>
    )
}

export default About
