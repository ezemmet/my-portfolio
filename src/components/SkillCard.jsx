import React from 'react'

const SkillCard = ({ icon, name }) => {
    return (
        <div className='border border-blue-500 w-[166px] h-[66px] lg:w-[196px] lg:h-[96px] bg-[#000000] rounded items-center text-center grid grid-cols-2 px-5 py-3'>
            <img src={icon} alt={name} className='lg:h-[60px] h-[40px]' />
            <p className='lg:text-lg font-fontJosefin'>{name}</p>
        </div>
    )
}

export default SkillCard
