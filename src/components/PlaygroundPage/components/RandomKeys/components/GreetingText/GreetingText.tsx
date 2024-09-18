// import styles from "./GreetingText.module.css"

export interface IGreetingTextProps {
  isTimerActive: boolean
}

const GreetingText: React.FC<IGreetingTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>Loading...</span>
  }

  return (
    <span>
      Нажмите "Начать", чтобы запустить тренировку,
      <br /> после чего ожидайте первый символ
    </span>
  )
}

export default GreetingText
