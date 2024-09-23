import TypographyText from "../../../../../UIKit/TypographyText/TypographyText"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import stylesMain from "./../../RandomKeys.module.css"

export interface IGreetingTextProps {
  isTimerActive: boolean
}

const GreetingText: React.FC<IGreetingTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesMain.container}>
        <Box className={stylesMain.icon}>
          <CircularProgress />
        </Box>
      </div>
    )
  }

  return (
    <TypographyText>
      Нажмите <span className={stylesMain.bold}>"Начать"</span>, чтобы запустить
      игру, после чего ожидайте первый символ
    </TypographyText>
  )
}

export default GreetingText
