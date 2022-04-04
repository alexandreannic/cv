import {fade, useTheme} from '@material-ui/core'
import React from 'react'
import {cssMixins} from '../../utils/style'

export const Tag = ({children}) => {
  const theme = useTheme()
  return (
    <div style={{
      margin: `0 5px 5px 0`,
      borderRadius: 40,
      padding: '1px 8px',
      display: 'inline-flex',
      fontSize: cssMixins.fontSmall,
      // background: theme.palette.action.hover,
      // border: `1px solid ${theme.palette.divider}`,

      // border: `1px solid ${theme.palette.divider}`,

      backgroundColor: fade(theme.palette.primary.main, .06),
      border: `1px solid ${fade(theme.palette.primary.main, .5)}`,
      color: theme.palette.primary.main,
      // fontWeight: 500,
    }}>
      {children}
    </div>
  )
}
