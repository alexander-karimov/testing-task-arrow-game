import { useAppSelector } from "../../../../app/hooks"
import GreetingText from "./components/GreetingText/GreetingText"
import RandomArrows from "./components/RandomArrows/RandomArrows"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <h3>Случайные символы:</h3>

      {state.steps.length === 0 ? (
        <GreetingText isTimerActive={false} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
