import { useDispatch, useSelector } from "react-redux"
import { _decrement,_increment } from "../../stores/calc"
export default function CalcBtn() {

    const dispatch =useDispatch()
    const amount = useSelector(state=>state.calc.value)



    const incrementBtn=()=>{
        dispatch(_increment())
    }
    const decrementBtn=()=>{
        dispatch(_decrement())
    }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl  text-white bg-[#ffcc8a]  rounded-md w-[250px] text-center  " >Increment, Decrement App</h1>
    
      <div className="p-3 flex items-center justify-center ">
      
          <button className="bg-red-600 rounded-full p-2 text-white" onClick={decrementBtn}>azalt</button>
          <span className="px-4">{amount} </span>
          <button className="bg-indigo-600 rounded-full p-2 text-white"  onClick={incrementBtn}>arttır</button>
      </div>
    </div>
  )
}
