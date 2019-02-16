import React from "react"
import {sectionMargin} from "../Section"
import {Link} from "./Link"
import {Skill} from "./Skill"
import {cssMixins} from "../../utils/style"
import {makeStyles} from "@material-ui/styles"
import {AsideSection} from "./AsideSection"
import {useI18n} from "../../i18n/I18nContext"
import Logo from "../../utils/Logo"

const avatarSize = '1.50cm'

const useStyles = makeStyles(t => ({
  root: {
    width: '6.24cm',
    marginRight: sectionMargin(t) * 1.5
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: t.spacing.unit * 2,
  },
  avatar: {
    background: 'rgba(0,0,0,.4)',
    // height: avatarSize,
    // width: avatarSize,
    borderRadius: '50%',
    marginRight: t.spacing.unit * 1.5,
  },
  name: {
    fontSize: cssMixins.fontMainTitle,
    textAlign: 'center',
  },
  job: {
    color: t.palette.primary.main,
    fontSize: cssMixins.rem(1.5),
    fontWeight: 500,
  },
  divider: {
    height: 1,
    background: t.palette.divider,
    border: 'none',
    marginTop: t.spacing.unit,
    marginRight: t.spacing.unit,
  },
  p: {
    marginBottom: t.spacing.unit / 2,
  }
}))

export const Aside = () => {
  const css = useStyles()
  const i18n = useI18n()
  return (
    <main className={css.root}>
      <div className={css.header}>
        <Logo className={css.avatar} size={avatarSize} src="avatar.jpg"/>
        <div>
          <div className={css.name}>Alexandre Annic</div>
          <div className={css.job}>{i18n.job}</div>
        </div>
      </div>
      <AsideSection>
        <Link icon="location_on">{i18n.location}</Link>
        <Link icon="email">
          <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
        </Link>
        <Link iconFa="stack-overflow">
          <a href="https://stackoverflow.com/users/5735030/alexandre-annic"
             target="_blank">stackoverflow.com/users/5735030</a>
        </Link>
        <Link iconFa="github">
          <a href="https://github.com/alexandreannic" target="_blank">github.com/alexandreannic</a>
        </Link>
        <Link iconFa="linkedin">
          <a href="https://www.linkedin.com/in/alexandreannic/" target="_blank">linkedin.com/in/alexandreannic</a>
        </Link>
      </AsideSection>
      {i18n.skills.map(s =>
        <AsideSection title={s.title}>
          {s.content.map(c =>
            <Skill
              logo={c.logo}
              title={c.title}
              rate={c.rate}
              content={c.content}>
              <div dangerouslySetInnerHTML={{__html: c.content}}/>
            </Skill>
          )}
        </AsideSection>
      )}
      <AsideSection title={i18n.various.label}>
        {i18n.various.articles.map(v =>
          <div className={css.p} dangerouslySetInnerHTML={{__html: v}}/>
        )}
      </AsideSection>
    </main>
  )
}
