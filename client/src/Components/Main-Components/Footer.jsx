import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-50 mt-4 border-t flex items-center justify-center">
                <div className="w-full px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap gap-5 justify-center -mx-5 -my-2">
                        <Link to="/">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                Home
                            </div>
                        </Link>
                        <Link to="/popular">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                Popular
                            </div>
                        </Link>
                        <Link to="/newposts">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                NewBlogs
                            </div>
                        </Link>
                        <Link to="/post">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                Write
                            </div>
                        </Link>
                        <Link to="/login">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                Login
                            </div>
                        </Link>
                        <Link to="/register">
                            <div className="text-base leading-6 hover:text-emerald-500">
                                Register
                            </div>
                        </Link>

                    </nav>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        Made with <span className='text-red-500'>❤</span> by tyzrex
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer