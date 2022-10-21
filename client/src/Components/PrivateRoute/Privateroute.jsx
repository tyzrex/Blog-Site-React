import React from 'react'
import { AuthContext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const Privateroute = ({children}) => {

    const {user} = useContext(AuthContext)

  return (
    <div>
        {user?children : <Navigate to="/login"/>}
    </div>
  )
}

export default Privateroute