import { Pause, PlayArrow } from "@mui/icons-material"
import Button from "../../../UIKit/Button/Button"
import styles from "./Control.module.css"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div className={styles.control}>
      <Button
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        className={styles.button}
        endIcon={<PlayArrow />}
      >
        Начать
      </Button>
      <Button
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        className={styles.button}
        endIcon={<Pause />}
      >
        Пауза
      </Button>
    </div>
  )
}

export default Controls
