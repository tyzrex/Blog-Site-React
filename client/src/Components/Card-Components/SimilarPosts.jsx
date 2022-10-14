import React from 'react'
import { Link } from 'react-router-dom'

const SimilarPosts = ({index,image,title}) => {
    return (
        <div>
            <div className='mx-4 my-4 h-[auto] pb-4 overflow-hidden shadow-lg rounded-md'>
                <div className='h-[150px] w-full bg-black'>
                    <img src={image} alt="smt" className='object-cover max-h-[150px] w-full' />
                </div>

                <div className='grid mx-auto justify-items-center content-center max-w-[80%] text-justify'>
                    <h1 className='py-4 font-bold text-center text-xl '>{title}</h1>
                    <Link to={`/Individualpost/${index}`}>
                        <button className='p-2 bg-custom-green rounded-xl text-white'>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SimilarPosts