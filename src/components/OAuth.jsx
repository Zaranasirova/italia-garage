import React, { useContext } from 'react'
import { MainContext } from '../utils/MainContext'

const OAuth = () => {
  const {currentUser,handleLogOut}=useContext(MainContext);
  
  return (
   <div>
     <div>OAuth xos geldiz {`${currentUser.firstname
    } ${currentUser.lastname}`}</div>
  <button onClick={handleLogOut}>
    Logout
  </button>
   </div>
    
  )
}

export default OAuth