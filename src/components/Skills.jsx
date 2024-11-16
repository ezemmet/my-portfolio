 import React from 'react'
import SkillCard from './SkillCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import PythonIcon from '../icons/pythonicon.png'
import JSIcon from '../icons/jsicon.png'
import CssIcon from '../icons/cssicon.png'
import GitIcon from '../icons/giticon.png'
import GithubIcon from '../icons/githubicon.png'
import HtmlIcon from '../icons/htmlicon.png'
import MongoIcon from '../icons/mongoicon.png'
import NodeIcon from '../icons/nodeicon.png'
import ReactIcon from '../icons/reacticon.png'
import TailwindIcon from '../icons/tailwindicon.png'

const Skills = () => {
    return (
        <div className='bg-[#1d1d1d] lg:h-[70vh] text-white py-[3rem] lg:px-[8rem] px:[3rem] text-center lg:text-start'>
            <h2 className='font-fontNunito text-xl font-semibold'><FontAwesomeIcon className='text-red-600 mr-1' icon={faCaretRight} />My Skills</h2>
            <h3 className='text-2xl font-semibold font-fontPrompt'> - Skills I Know</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1.5rem] mt-[3rem]   place-items-center'>
                <SkillCard icon={PythonIcon} name={'Python'}/>
                <SkillCard icon={JSIcon} name={'Javascript'} />
                <SkillCard icon={ReactIcon} name={'React JS'} />
                <SkillCard icon={NodeIcon} name={'Node JS'} />
                <SkillCard icon={GithubIcon} name={'Git Hub'} />
                <SkillCard icon={GitIcon} name={'Git'} />
                <SkillCard icon={HtmlIcon} name={'HTML 5 '} />
                <SkillCard icon={CssIcon} name={'CSS 3'} />
                <SkillCard icon={TailwindIcon} name={'Tailwind'} />
                <SkillCard icon={MongoIcon} name={'Mongo DB'} />
            </div>
        </div>
    )
}

export default Skills
