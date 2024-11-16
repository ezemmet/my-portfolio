import React from 'react'

const HomePage = () => {
  return (
    <div id='home' className='bg-[#0e0e0e] h-[90vh] grid lg:grid-cols-2 px-2 lg:px-[3rem] text-[#fff] text-center lg:text-start'>
      <div className='md:px-[6rem] justify-center flex flex-col'>
        <p className='text-red-500 text-2xl font-fontPrompt'>Hello, My Name Is</p>
        <h2 className='text-6xl mt-2 font-fontNunito'>NITIN SHARMA</h2>
        <p className='text-[#c2c2c2] mt-2 text-sm font-fontPrompt'>- A passonate and dedicated front end developer, driven by the ever-evolving world of technology and its limitless possiblities.</p>
        <div className='mt-8'>
          <a href="#contact" className='hover:text-red-600 font-fontNunito border-2 border-red-600 font-semibold px-5 text-white rounded py-2'>Contact me</a>
        </div>
      </div>

      <div className='hidden lg:block p-[5rem]'>
        <div className='h-full "w-full bg-gradient-to-r from-red-600 to-black via-black"'>
          {/* <img src={Bg} alt="Nitin Sharma" className=''/> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
