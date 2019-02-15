import React from "react"
import Icon from "@material-ui/core/Icon/Icon"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  root: {
    color: '#fbbc04',
    display: 'flex',
  },
  icon: {
    fontSize: '16px !important',
  }
}))
export const Rate = ({rate}) => {
  const css = useStyles()
  const hasHalf = rate % 1 !== 0
  const icon = (name, i) => <Icon className={css.icon} key={i}>{name}</Icon>
  const integer = Math.trunc(rate)
  return (
    <div className={css.root}>
      {Array(integer).fill(0).map((_, i) => icon('star', i))}
      {hasHalf && icon('star_half')}
      {Array(5 - integer - (hasHalf ? 1 : 0)).fill(0).map((_, i) => icon('star_border', i))}
    </div>
  )
}
