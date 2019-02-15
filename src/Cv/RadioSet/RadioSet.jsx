import React from "react"
import {makeStyles} from "@material-ui/styles"
import classNames from 'classnames'

const useStyles = makeStyles(t => ({}))

const styleFirstItem = {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRight: 'none'
}

const styleItems = {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0
}

export const RadioSet = ({value, children, onChange, className}) => {
  const css = useStyles()
  return (
    <div className={classNames(css.langs, className)}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) {
          return null
        }
        console.log(i, i === 0 ? styleFirstItem : styleItems)
        return React.cloneElement(child, {
          key: i,
          baseStyle: i === 0 ? styleFirstItem : styleItems,
          selectedValue: value,
          onChange: onChange
        })
      })}
    </div>
  )
}
