import React from 'react'
import Logo from './logo'
import UserCom from './user'

export default function User() {
  return (
    <div className='p-10 flex justify-between'>
        <Logo />
        <UserCom />
    </div>
  )
}
