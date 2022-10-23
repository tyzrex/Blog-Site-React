import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Postcards = ({ index, image, title, description,created_at,username }) => {
    
    let date = created_at;
    let datePart = date.split("T")[0];

    const convertText = (html) =>{
        const doc = new DOMParser().parseFromString(html,'text/html');
        return doc.body.textContent;
    }

    return (
        // make a card component
        <div className='my-5 bg-white posts'>
        <section className="my-4 text-gray-600 body-font overflow-hidden shadow-lg lg:max-w-[1200px] lg:w-[1200px] md:w-[700px] sm:w-[500px] w-[350px]">
            <div className="container pt-4 pb-10 mx-auto w-[100%] ">
                <div className="inner md:w-full w-[80%] mx-auto grid grid-flow-row content-center justify-items-center lg:flex lg:justify-center lg:items-center lg:gap-40 gap-10 ">
                    <div className="img-container max-h-[400px] max-w-[400px] bg-custom-green rounded">
                         <img alt='postimg' className="max-h-[400px] top-5 left-5 relative max-w-[400px]object-cover object-center rounded" src={`/uploads/${image}`} />
                    </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-6 md:max-w-[95%] ">
                            <h1 className="text-custom-green text-3xl title-font font-bold mb-1">{title}</h1>
                            <div className='h-[26vh] overflow-hidden'>
                            {convertText(description)}
                            </div>
                            <div className='grid justify-between items-center md:flex gap-4 md:gap-0 '>
                                <Link to={`/Individualpost/${index}`}><button className="flex text-white bg-custom-green border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded">Readmore</button></Link>
                                <div className='grid'>
                                <span>Posted on : {datePart}  </span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Postcards








