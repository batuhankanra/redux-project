import { _decrement,_increment } from './stores/calc'
import CalcBtn from './components/calcBtn'
import Todo from './components/todo'
import User from './components/users'
import Modal from './components/modal'
import {  useSelector } from 'react-redux'
import { _setTheme } from './stores/theme'
import classNames from 'classnames'
import FooterC from './components/FooterC'

export default function App() {

  const {open} = useSelector(state=>state.modal)
  const {theme} =useSelector(state=>state.theme)

  
  
  return (
    <div className={classNames("App min-h-screen pb-2",{
      "bg-[#2b2744] text-white ":theme==='dark',
      "bg-[#20dbd3] text-black " : theme==='light'

    })} >
      {open && <Modal />}
      <User />
      <CalcBtn />

      <Todo />
      <FooterC />
    </div>
  )
}
