import { useDispatch, useSelector } from 'react-redux'
import modals from '../../modals'
import { _closeModal } from '../../stores/modal'

export default function Modal() {

  const {name,data} = useSelector(state=>state.modal)
  const modal =modals.find(m=>m.name ===name)
  const dispatch =useDispatch()
  const close= ()=>{
    dispatch(_closeModal())
  }

  return (
    <div>
      <modal.element close={close} data={data} />
    </div>
  )
}
