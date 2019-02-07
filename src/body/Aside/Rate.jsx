import React from "react"
import Icon from "@material-ui/core/Icon/Icon"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  root: {
    color: '#fed430'
  },
  icon: {
    fontSize: 16,
  }
}))
export const Rate = ({rate}) => {
  const css = useStyles()
  const hasHalf = rate % 1 !== 0
  const icon = name => <Icon className={css.icon}>{name}</Icon>
  return (
    <div className={css.root}>
      {Array(Math.trunc(rate)).fill(0).map(() => icon('star'))}
      {hasHalf && icon('star_half')}
      {Array(5 - Math.trunc(rate)).fill(0).map(() => icon('star_border'))}
    </div>
  )
}
