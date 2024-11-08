import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ServiceCard = ({ icon, heading, paragraph }) => {
    return (
        <div className='bg-[#1d1d1d] text-white w-[25vw] h-[30vh] text-center py-4 px-2 rounded-sm hover:translate-y-[-10px] hover:bg-red-500 transition-all ease-in-out duration-150'>
            <FontAwesomeIcon icon={icon} className='text-red-600 text-2xl mt-4' />
            <h3 className='font-semibold mt-4'>{heading}</h3>
            <h3 className='text-sm text-[#c2c2c2] mt-4'>{paragraph}</h3>
        </div>
    )
}

export default ServiceCard
