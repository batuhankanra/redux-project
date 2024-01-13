import React from 'react'

import {  useDispatch, useSelector } from 'react-redux'
import { _decrement,_increment } from './stores/calc'

export default function App() {
  const dispatch = useDispatch()
  const count =useSelector((state)=>state.calc.value)


  const incrementBtn =()=>{
    dispatch(_increment())
  }
  const decrementBtn=()=>{
    dispatch(_decrement())
  }
  return (
    <div>
      <button onClick={decrementBtn}>eksilt</button>


      <span>{count} </span>


      <button onClick={incrementBtn}>arttır</button>

    </div>
  )
}
