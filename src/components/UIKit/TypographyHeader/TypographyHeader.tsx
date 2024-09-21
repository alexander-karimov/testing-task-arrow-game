import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from "@mui/material"

import cn from "classnames"
import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends MUITypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyHeaderProps> = (props) => {
  const { className = "", children } = props

  return (
    <MUITypography
      {...props}
      className={cn(styles.text, className)}
      variant="h3"
    >
      {children}
    </MUITypography>
  )
}

export default TypographyHeader
