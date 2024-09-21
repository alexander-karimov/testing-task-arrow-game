import TypographyHeader from "../../../UIKit/TypographyHeader/TypographyHeader"
import TypographyText from "../../../UIKit/TypographyText/TypographyText"
import styles from "./Description.module.css"

const Description: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <TypographyHeader>5 подряд</TypographyHeader>
      </div>
      <TypographyText>
        Ваша цель - сделать <span className={styles.bold}>5</span> правильных
        нажатий подряд в ответ на появляющиеся символы.
      </TypographyText>
      <TypographyText>
        На каждое нажатие отводится <span className={styles.bold}>2</span>{" "}
        секунды.
      </TypographyText>
      <TypographyText>
        Каждое неверное действие или его отсутствие добавляет{" "}
        <span className={styles.bold}>1</span> штрафной бал
      </TypographyText>
      <TypographyText>
        В случае, если вы набираете <span className={styles.bold}>3</span>{" "}
        ошибки за всю игру - вы проиграли.
      </TypographyText>
    </>
  )
}

export default Description
