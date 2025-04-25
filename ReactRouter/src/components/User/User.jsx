import React from 'react'
import { useParams } from 'react-router-dom'
import Github from '../Github/Github';

function User() {
    const { userId}=useParams();
  return (
    // <div className='text-center bg-gray-400 font-bold text-xl'>User: {userId}</div>
    // <div className='text-center'>User</div>
    <Github user={userId}/>
  )
}

export default User