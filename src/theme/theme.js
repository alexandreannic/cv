import {createMuiTheme} from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'

export const muiTheme = (isDark = false) => createMuiTheme({
  typography: {
    fontSize: 14,
  },
  palette: {
    type: isDark ? 'dark' : 'light',
    primary: isDark ? blue : {...blue, 500: '#1a73e8'},
    text: {
      // primary: '#202124',
      secondary: isDark ? '#d4d8de' : '#5f6368',
    },
    background: {
      // default: '#F2F2F2'
    }
  }
})
