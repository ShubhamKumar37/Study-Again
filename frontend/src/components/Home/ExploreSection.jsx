import React, { useState } from 'react'
import data from "../../data/homepage-explore.js"
import ExploreCards from './ExploreCards.jsx';

const ExploreSection = () => {
    const [navIndex, setNavIndex] = useState(0);
    const [cardIndex, setCardIndex] = useState(0);

    const changeIndex = (index) => {
        setNavIndex(index);
    }

    const changeCardIndex = (index) => {
        setCardIndex(index);
    }

    return (
        <div className='w-full flex flex-col gap-[2rem]'>
            <ul className='flex flex-row w-[80%] mx-auto text-richblack-100 bg-richblack-800 rounded-full p-2 px-[2rem] gap-2 justify-between'>
                {
                    data.map((item, index) => {
                        return (<li onClick={() => changeIndex(index)} className={`transition-all  cursor-pointer p-2 px-5 rounded-full   ${navIndex === index ? "bg-richblack-900 text-white" : "hover:bg-richblack-900"}`} key={index}>{item.tag}</li>)
                    })
                }
            </ul>
            <div className='flex gap-[1.5rem]'>
                {
                    data[navIndex].courses.map((item, index) => {
                        return (<div className='w-[33%]' onClick={() => changeCardIndex(index)} key={index}><ExploreCards course={item} active={index === cardIndex} /></div>)
                    })
                }
            </div>
        </div>
    )
}

export default ExploreSection