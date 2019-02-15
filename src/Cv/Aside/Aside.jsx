import React from "react"
import {sectionMargin} from "../Section"
import {Link} from "./Link"
import {Skill} from "./Skill"
import {cssMixins} from "../../utils/style"
import {makeStyles} from "@material-ui/styles"
import {AsideSection} from "./AsideSection"
import {useI18n} from "../../i18n/I18nContext"

const avatarSize = '1.4cm'

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
    height: avatarSize,
    width: avatarSize,
    borderRadius: '50%',
    marginRight: t.spacing.unit * 1.5,
  },
  name: {
    fontSize: cssMixins.fontMainTitle,
    textAlign: 'center',
  },
  job: {
    color: t.palette.primary.main,
    fontSize: cssMixins.fontBig,
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

export const Aside = ({}) => {
  const css = useStyles()
  const i18n = useI18n()
  return (
    <main className={css.root}>
      <div className={css.header}>
        <div className={css.avatar}/>
        <div>
          <div className={css.name}>Alexandre Annic</div>
          <div className={css.job}>{i18n.job}</div>
        </div>
      </div>
      <AsideSection>
        <Link icon="email">
          <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
        </Link>
        <Link icon="location_on">{i18n.location}</Link>
        <Link iconFa="stack-overflow">
          <a href="https://stackoverflow.com/users/5735030/alexandre-annic">stackoverflow.com/users/5735030</a>
        </Link>
        <Link iconFa="github">
          <a href="https://github.com/alexandreannic">github.com/alexandreannic</a>
        </Link>
        <Link iconFa="linkedin" href="https://www.linkedin.com/in/alexandreannic/">
          <a href="https://github.com/alexandreannic">linkedin.com/in/alexandreannic</a>
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
      {/*<hr className={classes.divider}/>*/}
      {/*Algorithmes: complexité, compression, arbre/graphe, hachage, géometrie,*/}
      {/*<hr className={classes.divider}/>*/}
      <AsideSection title="Various">
        {i18n.various.map(v =>
          <div className={css.p} dangerouslySetInnerHTML={{__html: v}}/>
        )}
      </AsideSection>
    </main>
  )
}


// const Info = ({classes, icon, children}) =>
//   <main className={classes.Info}>
//     <Icon className={classes.Info_i}>{icon}</Icon>
//     {children}
//   </main>
//
// const InfoFa = ({classes, icon, children}) =>
//   <main className={classes.Info}>
//     <i className={`fab fa-${icon} ${classes.Info_i}`}/>
//     {children}
//   </main>


