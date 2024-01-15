import React, { useState } from 'react'

import { _editTodo } from '../stores/todo'
import { useDispatch } from 'react-redux'

export default function EditTodo({data,close}) {
    const [todo,setTodo] = useState(data.title)
    const [done,setDone] = useState(data.done)
    const dispatch= useDispatch()

    


    const submitHandle=(e)=>{
        e.preventDefault()
        dispatch(_editTodo({
            id:data.id,
            title:todo,
            done
        }))
    }
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-[#000] flex items-center justify-center '>
        <div className='bg-[#fff] p-4 text-black  '>
            <form onSubmit={submitHandle}>
                <input type="text" value={todo} onChange={e=> setTodo(e.target.value)} />
                <label> 
                    <input type="checkbox" checked={done} onChange={e=>setDone(e.target.checked)} />
                    tamamlandı
                </label>
                <button type='submit' className='bg-gray-600 p-2 text-sm rounded text-white'>tamamlandı</button>
            </form>
            <button onClick={close} className='bg-indigo-600 p-2 text-sm rounded text-white'>kapat</button>
        </div>
    </div>
  )
}
