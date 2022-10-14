import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'

const Detailpost = ({title,description,image}) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center mx-3 my-4 h-auto'>
                <div className='flex flex-col items-center justify-center gap-5 max-w-[90%]'>
                    <h1 className='text-3xl font-bold text-slate-800 text-center '>{title}</h1>
                    <img src={image} alt="" className='w-[100%] h-[400px] object-cover ' />
                    <div className='grid gap-4'>
                        <div className='grid gap-2 text-custom-green font-bold'>
                            <p className='flex items-center gap-2'>Posted by:
                                <p className='text-sm text-gray-600'>Sulav Baral</p>
                                <AiOutlineDelete className='ml-2 text-red-500' />
                                <FaEdit className='ml-2 text-blue-500' />
                            </p>
                            <p>Posted on: </p>
                        </div>
                        <div className='mx-auto'>
                            <p className='text-xl text-gray-500 text-justify'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailpost