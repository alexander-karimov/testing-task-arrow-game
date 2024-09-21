import styles from "./Score.module.css"

import { Chip, Stack } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UIKit/TypographyHeader/TypographyHeader"
import TypographyText from "../../../UIKit/TypographyText/TypographyText"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <div className={styles.headerContainer}>
        <TypographyHeader>Текущий счет:</TypographyHeader>
      </div>
      <div className={styles.scoreContainer}>
        <Stack direction="row" spacing={2}>
          <Chip
            label={
              <TypographyText>
                Правильных ответов:{" "}
                <span className={styles.bold}>{state.totalSuccessful}</span>
              </TypographyText>
            }
            color="success"
            variant="outlined"
          ></Chip>
          <Chip
            label={
              <TypographyText>
                Штрафные балы:{" "}
                <span className={styles.bold}>{state.totalFailure}</span>
              </TypographyText>
            }
            color="warning"
            variant="outlined"
          ></Chip>
        </Stack>
      </div>
    </>
  )
}

export default Score
