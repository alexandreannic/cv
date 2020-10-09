import React from "react"
import Icon from "@material-ui/core/Icon/Icon"
import {makeStyles} from "@material-ui/styles"
import {mapFor} from '../../utils/common'


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
  const integer = Math.trunc(rate)
  const icon = (name) => (i) => <Icon className={css.icon} key={i}>{name}</Icon>
  return (
    <div className={css.root}>
      {mapFor(integer, icon('star'))}
      {hasHalf && icon('star_half')(1)}
      {mapFor(5 - integer - (hasHalf ? 1 : 0), icon('star_border'))}
    </div>
  )
}
