import React from "react"
import Icon from "@material-ui/core/Icon/Icon"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  root: {
    color: '#fbbc04'
  },
  icon: {
    fontSize: '18px !important',
  }
}))
export const Rate = ({rate}) => {
  const css = useStyles()
  const hasHalf = rate % 1 !== 0
  const icon = (name, i) => <Icon className={css.icon} key={i}>{name}</Icon>
  return (
    <div className={css.root}>
      {Array(Math.trunc(rate)).fill(0).map((_, i) => icon('star', i))}
      {hasHalf && icon('star_half')}
      {Array(5 - Math.trunc(rate)).fill(0).map((_, i) => icon('star_border', i))}
    </div>
  )
}
