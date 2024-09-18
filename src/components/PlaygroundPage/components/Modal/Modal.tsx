import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"

export interface IModalProps {
  //React.Dispatch<React.SetStateAction<boolean>> - это стандартное описание пропса для 2 значения из useState
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }

  return (
    <div>
      {isSuccessEndGame ? (
        <span>
          Поздравляем!
          <br />
          Вы выиграли!
        </span>
      ) : (
        <span>
          О, нет...
          <br />
          Вы проиграли!
        </span>
      )}
      <button onClick={handleClose}>Начать новую игру!</button>
    </div>
  )
}

export default Modal
