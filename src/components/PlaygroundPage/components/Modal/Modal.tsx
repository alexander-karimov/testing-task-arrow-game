import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import { Modal as MUIModal } from "@mui/material"
import TypographyText from "../../../UIKit/TypographyText/TypographyText"
import Button from "../../../UIKit/Button/Button"
import TypographyHeader from "../../../UIKit/TypographyHeader/TypographyHeader"
import styles from "./Modal.module.css"

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
    <MUIModal open onClose={() => handleClose} className={styles.modal}>
      <div className={styles.container}>
        {isSuccessEndGame ? (
          <div>
            <TypographyHeader>Поздравляем!</TypographyHeader>
            <TypographyText className={styles.text}>
              <br />
              Вы выиграли!
            </TypographyText>
          </div>
        ) : (
          <div>
            <TypographyHeader>О, нет!</TypographyHeader>
            <TypographyText className={styles.text}>
              <br />
              Вы проиграли!
            </TypographyText>
          </div>
        )}
        <Button onClick={handleClose} className={styles.button}>
          Начать новую игру!
        </Button>
      </div>
    </MUIModal>
  )
}

export default Modal
