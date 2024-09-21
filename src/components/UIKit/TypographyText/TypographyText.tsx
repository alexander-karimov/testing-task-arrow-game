import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from "@mui/material"

import cn from "classnames"
import styles from "./TypographyText.module.css"

export interface ITypographyTextProps extends MUITypographyProps {
  //
}

const TypographyText: React.FC<ITypographyTextProps> = (props) => {
  const { className = "", children } = props

  return (
    <MUITypography {...props} className={cn(styles.text, className)}>
      {children}
    </MUITypography>
  )
}

export default TypographyText
