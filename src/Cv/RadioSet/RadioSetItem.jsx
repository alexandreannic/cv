import React from "react"
import Button from "@material-ui/core/Button/Button"
import Radio from "@material-ui/core/Radio/Radio"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  radio: {
    padding: '0px !important',
    marginLeft: '-4px !important',
    marginRight: '6px !important',
  }
}))

export const RadioSetItem = ({value, selectedValue, children, onChange, baseStyle, style}) => {
  const css = useStyles()
  return (
    <Button variant="outlined" color="primary" onClick={() => onChange(value)} style={{...baseStyle, ...style}}>
      <Radio checked={selectedValue === value} color="primary" className={css.radio}/>
      {children}
    </Button>
  )
}
