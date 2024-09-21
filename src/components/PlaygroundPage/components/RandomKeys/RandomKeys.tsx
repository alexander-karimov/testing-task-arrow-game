import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UIKit/TypographyHeader/TypographyHeader"
import GreetingText from "./components/GreetingText/GreetingText"
import RandomArrows from "./components/RandomArrows/RandomArrows"
import styles from "./RandomKeys.module.css"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <div className={styles.headerContainer}>
        <TypographyHeader>Случайные символы:</TypographyHeader>
      </div>

      {state.steps.length === 0 ? (
        <GreetingText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </>
  )
}

export default RandomKeys
