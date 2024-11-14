import React from 'react'

const SkillCard = ({ icon, name }) => {
    return (
        <div className='ml-2 rounded w-[200px] h-[100px] bg-gradient-to-r from-red-500 to-black via-[#000000] flex justify-center items-center hover:bg-gradient-to-r hover:from-black hover:to-red-600'>
            <div className='w-[196px] h-[96px] bg-[#000000] rounded items-center text-center grid grid-cols-2 px-5 py-3'>
                <img src={icon} alt={name} className='h-[70px]'/>
                <p className='text-lg font-fontJosefin'>{name}</p>
            </div>
        </div>
    )
}

export default SkillCard
