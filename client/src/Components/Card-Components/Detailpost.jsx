import React,{useContext} from 'react'
import {FaEdit} from 'react-icons/fa'
import {AiOutlineDelete} from 'react-icons/ai'
import { AuthContext } from '../Context/Authcontext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Detailpost = ({title,description,image,username}) => {
    const {user} = useContext(AuthContext);
    const id = window.location.pathname.split('/')[2];
    const [data, setData] = useState({
        title : {title},
        description: {description},
        id : {id}
      })

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${id}`)
            window.location.replace('/')
        }
        catch(err){
            console.log(err)
        }
    }
    const convertText = (html) =>{
        const doc = new DOMParser().parseFromString(html,'text/html');
        return doc.body.textContent;
    }
    console.log(data)



    return (
        <div>
            <div className='flex flex-col items-center justify-center mx-3 my-4 h-auto'>
                <div className='flex flex-col items-center justify-center gap-5 max-w-[90%]'>
                    <h1 className='text-3xl font-bold text-slate-800 text-center '>{title}</h1>
                    <img src={`/uploads/${image}`} alt="" className='w-[100%] h-[400px] object-cover ' />
                    <div className='grid gap-4'>
                        <div className='grid gap-2 text-custom-green font-bold'>
                            <div className='flex items-center gap-2'>Posted by:
                                <div className='text-sm text-gray-600'>{username}</div>
                                {user.username === username &&
                                    <div className='flex gap-2'>
                                    <AiOutlineDelete className='ml-2 text-red-500' onClick={handleDelete} />
                                    <Link to={`/post/edit/${id}`} state={data}><FaEdit className='ml-2 text-blue-500' /></Link>
                                    </div>
                                }
                            </div>
                            <p>Posted on: </p>
                        </div>
                        <div className='mx-auto'>
                            <p className='text-xl text-gray-500 text-justify'>{convertText(description)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailpost