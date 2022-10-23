import React, { useState,useContext } from 'react';
import { RiMenu4Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../../Assets/logo4.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

    const {user,logoutUser} = useContext(AuthContext);
    return (
        <div>
            <div className='text-black lg:max-w-[1200px] max-w-[95%] bg-white flex justify-between items-center mx-auto px-4 h-28'>
                <Link to ='/'><img src={Logo} className="h-24 rounded-full" alt="" /></Link>
                <div className=''>
                    <ul className='hidden md:flex cursor-pointer'>
                        <Link to='/'>
                        <div className='p-4 hover-underline-animation'>Home</div>
                        </Link>
                        <Link to='/newposts'>
                        <div className='p-4 hover-underline-animation'>My Posts</div>
                        </Link>
                        <Link>
                        <div className='p-4 hover-underline-animation'>Popular</div>
                        </Link>
                        <Link to='/post'>
                        <div className='p-4 hover-underline-animation'>Write</div>
                        </Link>
                        {user?(
                            <button className='p-4 hover-underline-animation'>{user.username}</button>
                        ):(
                            <></>
                        )}
                        {user? <button onClick={logoutUser} className='bg-custom-green hover:bg-emerald-500 p-4 rounded-full ease-in-out duration-500 hover:text-white'>Logout</button> : 
                        <Link to='/login'>
                        <button className='bg-custom-green hover:bg-emerald-500 p-4 rounded-full ease-in-out duration-500 hover:text-white'><span className='text-white'>Login</span></button>
                        </Link>
                        }
                        
                    </ul>
                </div>

                <div onClick={handleNav} className='block md:hidden bg-custom-green text-white rounded-full p-[12px]'>
                    {!nav ? <AiOutlineClose size={28} /> : <RiMenu4Line size={28} />}
                </div>
                <div className={!nav ? 'z-10 fixed top-0 left-0 w-[80%] border-r border-r-gray-200 h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%] transition-opacity ease-in duration-500'}>
                <img src={Logo} className="h-24 rounded-full" alt="" />
                    <ul className='p-4 text-black '>
                    <div className='p-4 cursor-pointer border-b border-b-gray-300'>Home</div>
                        <div className='p-4 border-b border-b-gray-300 cursor-pointer'>Popular</div>
                        <div className='p-4 border-b border-b-gray-300 cursor-pointer'>New Blogs</div>
                        <div className='p-4 border-b border-b-gray-300 cursor-pointer'>Write</div>
                        <div className=' border-b border-b-gray-300'>
                        <button className='p-4 '>Username</button>
                        </div>
                        <div className='mt-4'>
                        <Link to='/login'>
                        <button className='bg-custom-green hover:bg-emerald-600 p-4 rounded-full ease-in-out duration-500 hover:text-white'><span className='text-white'>Login</span></button>
                        </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar