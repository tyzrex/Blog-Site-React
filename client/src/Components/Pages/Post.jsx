import React from 'react'
import { useState } from 'react'
import Footer from '../Main-Components/Footer'
import Navbar from '../Main-Components/Navbar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Post = () => {

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData)
      return res.data;
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgLink = await upload();
    try {
      const res = await axios.post(`/posts/posts`,{
        title:title,
        description:value,
        img: imgLink
      });
      <Navigate to="/"/>
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='lg:flex lg:justify-center lg:items-start lg:max-w-[1200px] max-w-[90%] h-auto mt-10 mb-16 mx-auto'>
        <div className='lg:flex lg:justify-around grid content-center justify-items-center gap-20 w-full items-center my-4'>
          <form>
            <div className=''>
              <h1 className='text-3xl font-bold text-slate-800 text-center'>Create a Post</h1>
              <div>

                <div>
                  <label className="block text-xl text-gray-700">
                    Title
                  </label>

                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Give a title"
                    className="mt-1 w-full rounded-md border-gray-200 p-2 my-5 shadow-sm sm:text-sm border"
                    name='title'
                    value={title}
                  />
                </div>

              </div>
              <div className=''>
                <ReactQuill value={value} onChange={setValue} theme='snow' className='ease-in-out duration-500 lg:w-[800px] lg:h-[300px] md:w-[600px] md:h-[225px] w-[400px] h-[150px] ' />
              </div>
            </div>
          </form>

          <div className='flex flex-col justify-between items-center gap-6 h-full'>
            <div className='file flex flex-col justify-between'>
              <h1 className='text-2xl font-bold text-center'>Upload file</h1>
              <div className="flex justify-center items-center w-full py-6 ">
                <label className="flex flex-col justify-center items-center w-full h-[300px] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                  <div className="flex flex-col justify-center items-center pt-5 pb-6 h-auto w-[250px]">
                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG </p>
                  </div>
                  <input onChange={e => {
                    setFile(e.target.files[0])
                  }} id="dropzone-file" type="file" className="hidden" />
                  {
                    file && <div className='w-[200px] h-[150px] overflow-auto mb-4'>
                      <img src={URL.createObjectURL(file)} alt="" className=' mb-10' />
                    </div>
                  }
                </label>
              </div>
            </div>
            <div>

              <button className='bg-custom-green text-white px-6 py-2 rounded-md' onClick={handleSubmit}>Post</button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post