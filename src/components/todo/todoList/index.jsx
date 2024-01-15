import {  useDispatch, useSelector } from "react-redux"
import  todo, { _deleteTodo } from "../../../stores/todo"
import { _openModal } from "../../../stores/modal"

export default function TodoList() {

const {todos} =useSelector(state=>state.todo)

const dispatch = useDispatch()


const deleteHandle=(id)=>{
    dispatch(_deleteTodo(id))
}

const editHandle=(todo)=>{
    dispatch(_openModal({
        name:'edit-todo',
        data:todo
    }))
}
  return (
    <div>
        <ul className='list-none p-0 w-[400px] mx-auto'>
            {todos && todos.map((todo,key)=>(
                <li key={key} className='mx-[10px] my-0 p-[10px] rounded-md flex justify-between items-center gap-x-2'>
                    {todo.title} | {todo.user}
                    <div className='flex gap-x-2'>
                        <button className='bg-indigo-600 text-white p-3 rounded cursor-pointer text-sm ' onClick={()=>editHandle(todo)}>düzenle</button> 
                        <button className='bg-red-600 text-white p-3 rounded cursor-pointer text-sm' onClick={()=>deleteHandle(todo.id)}  >sil</button>
                    
                    </div>
                </li>
            ))}

            
        </ul>
    </div>
  )
}
