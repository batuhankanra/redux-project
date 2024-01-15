import { _decrement,_increment } from './stores/calc'
import CalcBtn from './components/calcBtn'
import Todo from './components/todo'
import User from './components/users'
import Modal from './components/modal'
import { useSelector } from 'react-redux'

export default function App() {

  const {open} = useSelector(state=>state.modal)
  
  return (
    <div>
      {open && <Modal />}
      <User />
      <CalcBtn />

      <Todo />

    </div>
  )
}
