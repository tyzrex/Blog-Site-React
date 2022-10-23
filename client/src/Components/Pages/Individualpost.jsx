import React from 'react'
import SimilarPosts from '../Card-Components/SimilarPosts'
import {useState, useEffect} from 'react'
import Footer from '../Main-Components/Footer'
import Navbar from '../Main-Components/Navbar'
import Detailpost from '../Card-Components/Detailpost'
import axios from 'axios'
import Loading from '../Main-Components/Loading'

const Individualpost = () => {

    const dummyData = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi inventore!',
            img: 'https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi inventore!',
            img: 'https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi inventore!',
            img: 'https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi inventore!',
            img: 'https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        },
    ]

    // const individualDummy = [
    //     {
    //         id: 3,
    //         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    //         description: 'm ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam perspiciatis voluptate, magni, eligendi at architecto veniam nobis saepe eius doloremque ipsa maxime, ullam perferendis dolore quasi enim debitis! Nesciunt! Odit consequuntur unde, expedita fugiat consequatur quos dolorem deleniti earum magni, iure harum neque aperiam ullam. Accusantium dolor ea nostrum, dignissimos, id est at voluptates excepturi inventore!',
    //         img: 'https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    //     }
    // ]

    const [post,setPost] = useState([])
    const [individualPost,setIndividualPost] = useState([])
    console.log(individualPost)

    const [loading,setLoading] = useState(true)

    const id = window.location.pathname.split("/")[2]
    
    const getPost = async () => {
        try{
            const response = await axios.get(`/posts/${id}`)
            setIndividualPost(response.data)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getPost()
        }
        ,1000)
    },[id])


    return (
        <div>
            <Navbar />
            <div className='middle lg:max-w-[1200px] lg:flex grid content-center justify-items-center mx-auto gap-2 mt-4'>
                <div className='current-post h-auto lg:w-[70%] max-w-[90%] '>
                    <div className='flex flex-col'>
                        {
                            loading ? <Loading /> : (
                                    <Detailpost title={individualPost.title} description={individualPost.content} image={individualPost.image} username={individualPost.username} />
            
                                )
                        }
                    </div>
                </div>
                <div className='similar-posts h-auto lg:w-[30%] w-auto max-w-[90%] '>
                    <div>
                        <h1 className='text-center text-2xl mt-4 font-bold'>You may also <span className='text-custom-green'>Like</span></h1>
                    </div>

                    <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 content-center justify-items-center lg:flex flex-col'>
                    {dummyData.map((item) => (
                        <SimilarPosts key={item.id} title={item.title} image={item.img} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Individualpost