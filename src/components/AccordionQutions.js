import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { Collapse } from 'react-collapse';


const AccordionQutions = ({ item }) => {

    const [open, setopen] = useState(false)
    
    const toggle = () => {
        setopen(!open)
    }

    return (
        <>
            <div className=' max-w-[600px] pl-[10px] py-2 border my-2'>
                <div className='flex items-center cursor-pointer' onClick={toggle}>
                    <span >{open ? <AiOutlineMinus className='text-2xl mr-2' /> : <AiOutlinePlus className='text-2xl mr-2' />}</span>
                    <h5 className='text-gray-900 font-bold'>{item.question}</h5>
                </div>

                <Collapse isOpened={open}>
                    <div className='text-gray-500 font-medium p-2'>
                        <p className='mb-[10px]'>{item.ans}</p>
                        <p>{item.ans}</p>
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default AccordionQutions