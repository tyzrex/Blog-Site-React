import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "");

    const loginUser = async (data) => {
        try {
            const response = await axios.post('/auth/login', data)
            setUser(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const logoutUser = async (data) => {
        await axios.post('/auth/logout')
        setUser("")
        localStorage.removeItem("user")
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}