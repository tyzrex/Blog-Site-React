import React from 'react'
import { AuthContext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const LoggedRoute = ({children}) => {

    const {user} = useContext(AuthContext)

  return (
    <div>
        {!user?children : <Navigate to="/"/>}
    </div>
  )
}

export default LoggedRoute