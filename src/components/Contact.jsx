import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faPaperPlane, faUpLong } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id='contact' className='bg-[#0e0e0e] text-white h-[75vh] py-[3rem] px-[8rem] text-center relative'>
            <h2 className='font-fontNunito text-xl font-semibold'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />Conact Me</h2>
            <h3 className='text-2xl font-semibold font-fontPrompt'>- Send Me A Message</h3>
            <div className=' grid justify-center'>
                <form className='grid w-[40vw] font-fontKanit' onSubmit={handleSubmit}>
                    <label className='text-start mt-6' htmlFor="name">Your name *</label>
                    <input className='bg-transparent outline-none border-b-2 border-red-600 py-1' type="text" placeholder='Enter your name' required />
                    <label className='text-start mt-6' htmlFor="email">Your email *</label>
                    <input className='bg-transparent outline-none border-b-2 border-red-600 py-1' type="email" placeholder='Enter your email' required />
                    <label className='text-start mt-6' htmlFor="msg">Your message *</label>
                    <input className='bg-transparent outline-none border-b-2 border-red-600 py-1' type="text" placeholder='Message' />
                    <button className='border-2 border-red-600 mt-6 py-2 rounded'>Send<FontAwesomeIcon className='ml-2' icon={faPaperPlane} /></button>
                </form>
            </div>
            <a href="#header" className='absolute right-[5%]'><FontAwesomeIcon icon={faUpLong} className='border-2 border-red-600 rounded-[50%] h-[25px] w-[25px] p-2 text-red-500 cursor-pointer' /></a>
        </div>
    )
}

export default Contact
