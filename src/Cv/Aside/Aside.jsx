import React from "react"
import {Link} from "./Link"
import {cssMixins} from "../../utils/style"
import {makeStyles} from "@material-ui/core/styles"
import {useI18n} from "../../i18n/I18nContext"
import Logo from "../../utils/Logo"
import {Icon, useTheme} from '@material-ui/core'

const avatarSize = '1.6cm'

const useStyles = makeStyles(t => ({
  root: {
    marginBottom: t.spacing(3),
    // display: 'flex',
    // alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing(2),
  },
  avatar: {
    background: 'rgba(0,0,0,.4)',
    // height: avatarSize,
    // width: avatarSize,
    borderRadius: '50%',
    marginRight: t.spacing(1.5),
  },
  name: {
    fontSize: cssMixins.fontMainTitle,
    textAlign: 'center',
  },
  job: {
    fontSize: cssMixins.fontMainTitle,
    color: t.palette.text.secondary,
    fontWeight: 'lighter',
    // fontSize: cssMixins.rem(1.5),
    // fontWeight: 500,
  },
  divider: {
    height: 1,
    background: t.palette.divider,
    border: 'none',
    marginTop: t.spacing(1),
    marginRight: t.spacing(1),
  },
  p: {
    marginBottom: t.spacing(1) / 2,
  }
}))

const Dot = () => {
  const t = useTheme()
  return (
    <Icon style={{margin: '0 8px', color: t.palette.text.disabled, fontSize: 12}}>noise_control_off</Icon>
  )
}

export const Aside = () => {
  const css = useStyles()
  const i18n = useI18n()
  const t = useTheme()
  return (
    <header className={css.root}>
      <div className={css.header}>
        <Logo className={css.avatar} size={avatarSize} src="avatar.jpg"/>
        <div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: t.spacing(.5)}}>
            <div className={css.name}>Alexandre Annic</div>
            <div className={css.job}>, {i18n.job}</div>
          </div>
          <div style={{
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Link icon="location_on">{i18n.location}</Link>
            <Dot/>
            <Link icon="email">
              <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
            </Link>
            <Dot/>
            {/*<Link iconFa="stack-overflow">*/}
            {/*  <a href="https://stackoverflow.com/users/5735030/alexandre-annic"*/}
            {/*     target="_blank" rel="noopener noreferrer">stackoverflow.com/users/5735030</a>*/}
            {/*</Link>*/}
            {/*<Link iconFa="github">*/}
            {/*  <a href="https://github.com/alexandreannic" target="_blank"*/}
            {/*     rel="noopener noreferrer">github.com/alexandreannic</a>*/}
            {/*</Link>*/}
            <Link iconFa="linkedin">
              <a href="https://www.linkedin.com/in/alexandreannic/" target="_blank"
                 rel="noopener noreferrer">alexandreannic</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
