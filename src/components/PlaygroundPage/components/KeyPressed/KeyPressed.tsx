import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"
import TypographyHeader from "../../../UIKit/TypographyHeader/TypographyHeader"
import styles from "./KeyPressed.module.css"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  const pressedKey = useKeyPressedElement()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(event.key) && isTimerActive) {
        dispatch(setEnteredValue(event.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <>
      <div className={styles.headerContainer}>
        <TypographyHeader>Нажатый символ:</TypographyHeader>
      </div>

      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{pressedKey}</span>
        </div>
      </div>
    </>
  )
}

export default KeyPressed
