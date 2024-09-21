import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material"

import cn from "classnames"
import styles from "./Button.module.css"

export interface IButtonProps extends MUIButtonProps {
  //
}

const Button: React.FC<IButtonProps> = (props) => {
  const { className = "", children } = props

  return (
    <MUIButton
      {...props}
      // Важно - props должны быть выше className,
      // иначе стили перезатрут друг друга непредвиденным образом
      className={cn(styles.button, className)}
      variant="contained"
      size="small"
    >
      {children}
    </MUIButton>
  )
}

export default Button
