import React from "react"
import {makeStyles} from "@material-ui/styles"
import {cssMixins} from "../utils/style"
import classNames from 'classnames'

const useStyles = makeStyles(t => ({
  Article: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: cssMixins.fontMedium,
    '&:not(:last-of-type)': {
      paddingBottom: t.spacing(1),
      marginBottom: t.spacing(1),
      // borderBottom: `1px solid ${t.palette.divider}`,
    },
  },
  body: {
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  period: {
    float: 'right',
    color: t.palette.text.disabled,
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    color: t.palette.primary.main,
    // color: t.palette.text.hint,
    fontSize: cssMixins.fontSmall,
    marginTop: t.spacing(.125),
    // marginBottom: t.spacing(.5),
  },
  logo: {
    marginRight: t.spacing(1),
  },
  title: {
    // fontWeight: 500,
    flex: 1,
    fontSize: cssMixins.fontBig,
  },
  text: {
    marginTop: t.spacing(.5),
    // textAlign: 'justify',
    color: t.palette.text.secondary,
    fontSize: cssMixins.fontSmall,
  },
  honor: {
    // color: t.palette.text.secondary,
    // fontWeight: 'bold',
    // fontSize: cssMixins.fontSmall,
    // display: 'inline-block',
    // paddingRight: 3,
    // paddingLeft: 3,
    // border: '1px solid ' + t.palette.primary.main,
    // color: t.palette.primary.main,
    // borderRadius: 4,
    color: 'black'
    // marginRight: t.spacing(1),
  }
}))

export const Article = ({title, period, location, logo, honor, children}) => {
  const css = useStyles()
  return (
    <div className={css.Article}>
      <div className={css.body}>
        <div className={css.header}>
          <div className={classNames('Article_title', css.title)}>
            {title}
            {honor && <span className={css.honor}> ({honor.toLowerCase()})</span>}
          </div>
          <div className={css.period}>{period}</div>
        </div>
        <div className={css.location}>
          {/*<Logo className={css.logo} src={logo} size={logoSize}/>*/}
          {location}
        </div>
        {children && <div className={classNames('Article_text', css.text)}>
          {children}
        </div>}
      </div>
    </div>
  )
}
