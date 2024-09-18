// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <h3>Счет:</h3>
      <span>Правильных ответов: {state.totalSuccessful}</span>
      <br />
      <span>Ошибок: {state.totalFailure}</span>
    </>
  )
}

export default Score
