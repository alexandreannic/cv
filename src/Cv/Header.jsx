import {makeStyles} from "@material-ui/styles"
import React from "react"
import {Link} from "./Aside/Link"
import {cssMixins} from "../utils/style"

const avatarSize = '1.8cm'

const useStyles = makeStyles(t => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing.unit * 3,
  },
  avatar: {
    background: 'rgba(0,0,0,.4)',
    height: avatarSize,
    width: avatarSize,
    borderRadius: '50%',
    marginRight: t.spacing.unit * 2,
  },
  location: {
    color: t.palette.text.secondary,
  },
  name: {
    fontSize: cssMixins.fontMainTitle,
  },
  title: {
    fontSize: cssMixins.fontBig,
    color: t.palette.primary.main,
  }
}))

export const Header = ({}) => {
  const css = useStyles()
  return (
    <header className={css.root}>
      <div className={css.avatar}/>
      <div>
        <div className={css.name}>Alexandre Annic</div>
        <div className={css.title}>Full-stack engineer</div>
        <div className={css.location}>Paris Area, France</div>
      </div>
      <div>
        <Link icon="email">alexandre.annic1@gmail.com</Link>
        <Link icon="phone">06 76 16 24 57</Link>
      </div>
    </header>
  )
}
