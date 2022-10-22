import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../Main-Components/Loading'
import Postcards from '../Card-Components/Postcards'

const Content = () => {

    const [post,setPost] = useState([])

    const getPosts = async () =>{
        try{
            const res = await axios.get('/posts')
            setPost(res.data)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }

    const [loading,setLoading] = useState(true)

    useEffect (()=>{
        setTimeout(() => {
            getPosts()
        }, 1000);
    },[])


  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center '>
            <div className='mt-6'>
                <h1 className='text-4xl font-bold'>Blog <span className='text-custom-green'>Posts</span></h1>
            </div>
            {loading ? <div className='mt-20 w-full'>
                <Loading/>
            </div>: <>
                {post.map((item) => (
                <Postcards key={item.id} index={item.id} image={item.image} title={item.title} description={item.content} created_at={item.created_at} />
            ))}</>}
            </div>
        </div>
    </div>
  )
}

export default Content