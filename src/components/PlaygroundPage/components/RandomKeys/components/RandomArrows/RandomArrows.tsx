import styles from "./RandomArrows.module.css"

import { useAppSelector } from "../../../../../../app/hooks"
import { IPlaygroundStepsState } from "../../../../store/types"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStyleForKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconFailure
    }
    return styles.iconDefault
  }

  return (
    <div>
      {state.steps.map((element) => (
        <span key={element.step} className={getStyleForKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
