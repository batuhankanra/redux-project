import { useDispatch,useSelector } from "react-redux"
import theme, { _setTheme } from "../../stores/theme"
export default function FooterC() {

    const dispatch =useDispatch()

    const {theme} =useSelector(state=>state.theme)

    const themeHandle =()=>{
        if(theme==='dark'){
          dispatch(_setTheme('light'))
        }
        if(theme==='light'){
          dispatch(_setTheme('dark'))
        }
       
      }
  return (
    <div className="p-2 flex flex-col items-center justify-center gap-y-2">
        <h1 className="font-bold text-xl  text-black bg-[#61ffff] rounded-md w-[200px] text-center  " >Theme Mod</h1>
        <button onClick={themeHandle} className="bg-red-600 rounded-md p-2 text-sm font-semibold">temayı değiştir {theme}</button>
    </div>
  )
}
