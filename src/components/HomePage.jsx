import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-[#0e0e0e] h-[90vh] grid md:grid-cols-2 px-[3rem] text-[#fff]'>
      <div className='border border-red-600 px-[5rem] justify-center flex flex-col'>
        <p className='text-red-500 text-xl'>Hello, My Name Is</p>
        <h2 className='text-4xl'>NITIN SHARMA</h2>
        <p className='text-[#c2c2c2]'>- A passonate and dedicated front end developer, driven by the ever-evolving world of technology and its limitless possiblities.</p>
        <div className='mt-3'>
          <a href="/contact" className='font-semibold px-5 border-2 border-red-600 text-white rounded py-2'>Contact me</a>
        </div>
      </div>

      <div className='border border-red-600'>

      </div>
    </div>
  )
}

export default HomePage
