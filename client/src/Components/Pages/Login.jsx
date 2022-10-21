import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    password: ""
  })

  const [error, setError] = useState({})
  const [subError, setSubError] = useState("")

  const {user,loginUser} = useContext(AuthContext);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let error = {}
    if (!data.name) {
      error.username = "Username is required"
    }
    if (!data.password) {
      error.password = "Password is required"
    }
    setError(error)
    return error;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (Object.keys(error).length !== 0) {
      console.log("Invalid submissions try again");
    } else {
      try {
        loginUser(data,subError,setSubError)
      }
      catch (err) {
        setSubError(err.response.data)
        console.log(err)
      }
    }
  };

  console.log(subError)

  const navigate = useNavigate();

  console.log(data)


  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-[30vh] lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1568945721873-6f1889039902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome <span className="text-custom-green">Back</span>
              </h1>

              <p className="mt-4 text-center leading-relaxed text-gray-500">
                Login to your account to continue.
              </p>

              <form action="#" className="mt-8 gap-6">
                <div className="flex flex-col gap-6 justify-center">
                  <div>

                    <div className="py-2">
                      <h1>Username</h1>
                    </div>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="UserName"
                      name="name"
                      autoComplete="username"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    {error.username && <p className="text-red-500">{error.username}</p>}
                  </div>

                  <div>

                  <div className="py-2">
                      <h1>Password</h1>
                    </div>
                    <input
                      onChange={handleChange}
                      type="password"
                      id="Password"
                      name="password"
                      autoComplete="current-password"
                      className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                    {error.password && <p className="text-red-500">{error.password}</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex items-center">
                    {subError ? <h1 className="text-red-600">{subError}</h1> : <></>}
                  </div>

                  <div className=" flex flex-col items-center gap-4">
                    <button
                      onClick={handleSubmit}
                      className="inline-block hover:bg-emerald-600 shrink-0 rounded-md border border-none bg-custom-green px-12 py-3 text-sm font-medium text-white transition hover:text-white focus:outline-none focus:ring">
                      Login
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Don't have an account?
                      <a
                        href="/register"
                        className="text-gray-700 underline hover:text-teal-300"
                      >
                        Sign Up
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
