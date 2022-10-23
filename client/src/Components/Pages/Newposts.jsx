import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Postcards from '../Card-Components/Postcards'
import Footer from '../Main-Components/Footer'
import Loading from '../Main-Components/Loading'
import Navbar from '../Main-Components/Navbar'

const Newposts = () => {
  const [posts, setPosts] = useState("")

  const getPosts = async () => {
    const res = await axios.get('/posts/user')
    setPosts(res.data)
    setLoading(false)
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getPosts()
    }, 1000);
  }, [])

  console.log(posts)

  return (
    <div>
      <Navbar />
        <div className='grid justify-items-center'>
        <div className='p-4'>
          <h1 className='text-3xl font-bold'>Posts By <span className='text-custom-green'>You</span></h1>
        </div>
        <div>
          {loading ? <div className='mt-20 w-full'>
            <Loading />
          </div> : <>
          {
            posts.length === 0 ? <div className='h-auto w-full'>
            <div className='flex-col items-center justify-center'>
            <img src="https://cdn.dribbble.com/users/2615454/screenshots/5896010/error-page.gif" alt="" />
           <div className='flex-col items-center text-center'>
           <h1 className='text-3xl font-bold text-center text-gray-700'>No <span className='text-custom-green'>Posts</span> Yet</h1>
            <h1 className='mt-2'>You can post your blogs by going to the write page.<a className='text-custom-green' href='/post'>Click here</a></h1>
           </div>
            </div>
          </div> : <div>
        {posts.map((item) => (
            <Postcards key={item.id} index={item.id} image={item.image} title={item.title} description={item.content} created_at={item.created_at} username={item.username} />
          ))}
          </div>
          }
          </>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Newposts