import React from 'react'
import Postcards from '../Card-Components/Postcards'

const Content = () => {

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

  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center '>
            <div className='mt-6'>
                <h1 className='text-4xl font-bold'>Blog <span className='text-custom-green'>Posts</span></h1>
            </div>
            {dummyData.map((item) => (
                <Postcards key={item.id} index={item.id} image={item.img} title={item.title} description={item.description} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Content