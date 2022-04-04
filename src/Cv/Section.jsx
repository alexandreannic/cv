import React from "react"
import {cssMixins} from "../utils/style"
import {makeStyles} from "@material-ui/styles"

export const sectionMargin = t => t.spacing(1) * 2.5

const useStyles = makeStyles(t => ({
  Section: {
    '&:not(:last-of-type)': {
      borderBottom: '1px solid ' + t.palette.divider,
    },
    // padding: t.spacing(2),
    // borderRadius: cssMixins.radius,
    marginBottom: sectionMargin(t),
    paddingBottom: sectionMargin(t),
  },
  title: {
    fontSize: cssMixins.fontTitle,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing(1.5),
    lineHeight: 1,
  },
  i: {
    marginRight: t.spacing(1),
  }
}))

const Section = ({title, icon, noSeparator, children}) => {
  const css = useStyles({noSeparator})
  return (
    <div className={css.Section}>
      {title &&
      <div className={css.title}>
        {/*<Icon className={css.i}>{icon}</Icon>*/}
        {title}
      </div>
      }
      {children}
    </div>
  )
}

export default Section
