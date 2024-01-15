import { useDispatch, useSelector } from "react-redux"
import { _setUser } from "../../../stores/auth"


export default function UserCom() {
    const {user} = useSelector(state=>state.auth)
    const dispatch =useDispatch()
    
    const loginHandle =(user)=>{
        dispatch(_setUser(user))
    }
    const logoutBtn =()=>{
        dispatch(_setUser(false))
    }



  return (
    <div>
        {!user && (
        <nav className='flex gap-x-2'>
            <button className='bg-[#104043] p-4 rounded hover:bg-[#00367a] ease-in duration-300 ' onClick={()=>loginHandle({id:1,username:'batuhan'})}>batuhan olarak giriş yap</button>
            <button className='bg-[#104043] p-4 rounded hover:bg-[#00367a] ease-in duration-300 ' onClick={()=>loginHandle({id:2,username:'kanra'})}>kanra olarak giriş yap</button>
        </nav>
        )}
        {user && (
            <nav className='flex gap-x-2'>
            <p className="p-4 text-sm">giriş yaptınız {user.username}</p>
            <button className='bg-red-600 p-4 rounded hover:bg-[#00367a] ease-in duration-300 ' onClick={logoutBtn}>çıkış yap</button>
        </nav>
        )}
    </div>
  )
}
