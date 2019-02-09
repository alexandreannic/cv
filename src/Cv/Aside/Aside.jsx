import React from "react"
import Code from "../../utils/Code"
import {sectionMargin} from "../Section"
import {Link} from "./Link"
import {Skill} from "./Skill"
import {cssMixins} from "../../utils/style"
import {makeStyles} from "@material-ui/styles"
import {AsideSection} from "./AsideSection"

const avatarSize = '1.5cm'

const useStyles = makeStyles(t => ({
  root: {
    width: '6.3cm',
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
  return (
    <main className={css.root}>
      <div className={css.header}>
        <div className={css.avatar}/>
        <div>
          <div className={css.name}>Alexandre Annic</div>
          <div className={css.job}>Full-stack engineer</div>
        </div>
      </div>
      <AsideSection>
        <Link icon="email">
          <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
        </Link>
        {/*<Link icon="phone">06 76 16 24 57</Link>*/}
        <Link icon="location_on">Paris Area, France</Link>
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
      <AsideSection title="Framework">
        <Skill logo="dev/angular.png" title="Angular (2+)" rate={5}>
          Used in larges applications (~200 components) sometimes coupled <Code>ngrx</Code>.
        </Skill>
        <Skill logo="dev/react.png" title="React" rate={5}>
          Used in large application (+100 components) sometimes coupled
          with <Code>Redux</Code> and <Code>TypeScript</Code>.
        </Skill>
        <Skill logo="dev/angularjs.png" title="AngularJS" rate={4}/>
        <Skill logo="dev/play.png" title="Play framework" rate={4}/>
      </AsideSection>
      <AsideSection title="Languages">
        <Skill logo="dev/ts.png" title="TypeScript" rate={5}/>
        <Skill logo="dev/javascript.png" title="JavaScript" rate={5}>
        </Skill>
        <Skill logo="dev/scala.png" title="Scala" rate={3}/>
        <Skill logo="dev/java.png" title="Java" rate={4}/>
        <Skill logo="dev/csharp.png" title="C#" rate={2.5}/>
        <Skill logo="dev/c++.png" title="C/C++" rate={3}/>
        <Skill logo="dev/perl.png" title="Perl" rate={3.5}/>
      </AsideSection>
      <AsideSection title="Persistence">
        <Skill title="SQL" rate={4.5}/>
        <Skill title="NoSQL" rate={3}>
        </Skill>
      </AsideSection>
      {/*<hr className={classes.divider}/>*/}
      {/*Algorithmes: complexité, compression, arbre/graphe, hachage, géometrie,*/}
      {/*<hr className={classes.divider}/>*/}
      <AsideSection title="Various">
        <div className={css.p}>Diploma for youth leaders and workers (BAFA)</div>
        <div className={css.p}>Sport: Crossfit, climbing, running</div>
        <div className={css.p}>Driving licence</div>
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


