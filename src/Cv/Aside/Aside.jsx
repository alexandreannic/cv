import React from "react"
import {sectionMargin} from "../Section"
import {Link} from "./Link"
import {Skill} from "./Skill"
import {cssMixins} from "../../utils/style"
import {makeStyles} from "@material-ui/core/styles"
import {AsideSection} from "./AsideSection"
import {useI18n} from "../../i18n/I18nContext"
import Logo from "../../utils/Logo"

const avatarSize = '1.56cm'

const useStyles = makeStyles(t => ({
  root: {
    width: '6.20cm',
    marginRight: sectionMargin(t) * 1.5
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
    color: t.palette.primary.main,
    fontSize: cssMixins.rem(1.5),
    fontWeight: 500,
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
             target="_blank" rel="noopener noreferrer">stackoverflow.com/users/5735030</a>
        </Link>
        <Link iconFa="github">
          <a href="https://github.com/alexandreannic" target="_blank"
             rel="noopener noreferrer">github.com/alexandreannic</a>
        </Link>
        <Link iconFa="linkedin">
          <a href="https://www.linkedin.com/in/alexandreannic/" target="_blank"
             rel="noopener noreferrer">linkedin.com/in/alexandreannic</a>
        </Link>
      </AsideSection>
      {i18n.skills.map((s, i) =>
        <AsideSection title={s.title} key={i}>
          {s.content.map((c, i) =>
            <Skill
              key={i}
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
        {i18n.various.articles.map((v, i) =>
          <div className={css.p} key={i} dangerouslySetInnerHTML={{__html: v}}/>
        )}
      </AsideSection>
    </main>
  )
}
