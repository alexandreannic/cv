import React from "react"
import Button from "@material-ui/core/Button/Button"
import Radio from "@material-ui/core/Radio/Radio"
import {makeStyles} from "@material-ui/styles"
import classNames from 'classnames'

const useStyles = makeStyles(t => ({
  radio: {
    padding: '0px !important',
    marginLeft: '-4px !important',
    marginRight: '6px !important',
  },
  rootFirstChild: {
    borderTopRightRadius: '0px !important',
    borderBottomRightRadius: '0px !important',
    borderRight: 'none !important',
  },
  root: {
    borderTopLeftRadius: '0px !important',
    borderBottomLeftRadius: '0px !important',
  }
}))

export const RadioSetItem = ({value, selectedValue, children, onChange, baseStyle, isFirst, className, ...others}) => {
  const css = useStyles()
  return (
    <Button variant="outlined" color="primary" className={classNames(className, isFirst ? css.rootFirstChild : css.root)}
            onClick={() => onChange(value)} {...others}>
      <Radio checked={selectedValue === value} color="primary" className={css.radio}/>
      {children}
    </Button>
  )
}
