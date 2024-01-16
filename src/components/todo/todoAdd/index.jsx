import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _addTodo } from '../../../stores/todo'
import { nanoid } from '@reduxjs/toolkit'

export default function TodoAdd() {
    const [todo,setTodo] =useState('')
    const {user} = useSelector(state=>state.auth)

    const dispatch=useDispatch()

    const submitHandle =e=>{
        e.preventDefault()
        dispatch(_addTodo({
            title:todo,
            done:false,
            id:nanoid(),
            user:user.id
            
        }))


    }

  return (
   <div className='flex flex-col items-center justify-center gap-y-2'>
        <h1 className="font-bold text-xl  text-white bg-[#1e223b]  rounded-md w-[200px] text-center  " >Todo App</h1>
   
        <form onSubmit={submitHandle} className='flex items-center justify-center  gap-x-2  '>
            
            <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} placeholder='baslik giriniz' className='w-[400px] p-2 text-4 text-black outline-none rounded-md ' />
            <button disabled={!todo || !user} className='bg-gray-600 rounded-full p-2 text-white' type='submit'>ekle</button>
        </form> 
    </div>
  )
}
