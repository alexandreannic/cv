import withStyles from "@material-ui/core/es/styles/withStyles"
import React from "react"
import {Icon, LinearProgress} from "@material-ui/core"
import {font, fontSmall, fontTitle} from "../App"
import Logo from "../utils/Logo"
import Code from "../utils/Code"

const avatarSize = '3.2cm'

const styles = t => ({
  root: {
    width: '6.8cm',
    padding: '.3cm',
    backgroundColor: t.palette.background.default,
    color: t.palette.text.secondary,
  },
  avatar: {
    background: 'rgba(0,0,0,.4)',
    height: avatarSize,
    width: avatarSize,
    borderRadius: '50%',
    margin: '0 auto .5cm auto',
  },
  aside_name: {
    fontSize: fontTitle,
    marginBottom: t.spacing.unit,
    textAlign: 'center',
  },
  Info: {
    fontSize: font,
    display: 'flex',
    alignItems: 'center',
    padding: t.spacing.unit / 3 + 'px'

  },
  Info_i: {
    marginRight: t.spacing.unit,
    fontSize: '18px !important',
    minWidth: '20px',
    textAlign: 'center',
    display: 'inline-block',
  },
  divider: {
    height: 1,
    background: t.palette.divider,
    border: 'none',
    margin: t.spacing.unit * 2 + 'px 0',
  },
  p: {
    fontSize: font,
    marginBottom: t.spacing.unit,
  }
})

const Aside = ({classes}) =>
  <main className={classes.root}>
    <div className={classes.avatar}/>
    <div className={classes.aside_name}>Alexandre Annic</div>
    <Info classes={classes} icon="email">alexandre.annic1@gmail.com</Info>
    <Info classes={classes} icon="phone">06 76 16 24 57</Info>
    <Info classes={classes} icon="location_on">Suresnes - 92150</Info>
    <InfoFa classes={classes} icon="stack-overflow">stackoverflow.com/users/5735030</InfoFa>
    <InfoFa classes={classes} icon="github">https://github.com/alexandreannic</InfoFa>
    <hr className={classes.divider}/>
    <AsideArticle logo="angular.png" title="Angular (2+)" progress={5}>
      Développements d'une application large combiné à <Code>Redux</Code> <Code>ngrx</Code>
      (~200 composants) et de librairies.
      Maîtrise de tous les concepts du framework.
    </AsideArticle>
    <AsideArticle logo="react.png" title="React" progress={5}>
      Développement d'une application large (+100 composants) et de
      nombreuses librairies (parfois codées en <Code>TypeScript</Code>).
      Utilisation avec <Code>Redux</Code> + middleware ou Context (React 16+).
    </AsideArticle>
    <AsideArticle logo="angularjs.png" title="AngularJS" progress={3.5}>
      Développement d'applications moyennes.
    </AsideArticle>
    <AsideArticle logo="javascript.png" title="Javascript" progress={5}>
    </AsideArticle>
    <AsideArticle logo="scala.png" title="Scala" progress={3}>
    </AsideArticle>
    <AsideArticle logo="java.png" title="Java" progress={4}>
    </AsideArticle>
    <hr className={classes.divider}/>
    Algorithmes: complexité, compression, arbre/graphe, hachage, géometrie,
    <hr className={classes.divider}/>
    <div className={classes.p}>Pemis B</div>
    <div className={classes.p}>BAFA (formation générale)</div>
    <div className={classes.p}>Sport quasi quotidien: Cross training, natation, course, escalade, ...</div>

  </main>


const Info = ({classes, icon, children}) =>
  <main className={classes.Info}>
    <Icon className={classes.Info_i}>{icon}</Icon>
    {children}
  </main>

const InfoFa = ({classes, icon, children}) =>
  <main className={classes.Info}>
    <i className={`fab fa-${icon} ${classes.Info_i}`}/>
    {children}
  </main>

const AsideArticle = withStyles(t => ({
  root: {
    marginBottom: t.spacing.unit * 2,
    display: 'flex',

  },
  header: {},
  title: {
    fontWeight: 500,
    marginBottom: t.spacing.unit / 2,
    fontSize: font,
  },
  body: {
    flex: 1,
  },
  logo: {
    marginRight: t.spacing.unit,
  },
  text: {
    fontSize: fontSmall,
    marginTop: t.spacing.unit / 2,
    textAlign: 'justify'
  }
}))(({classes, logo, title, progress, children}) =>
  <main className={classes.root}>
    <Logo src={logo} size={24} className={classes.logo}/>
    <div className={classes.body}>
      <div className={classes.title}>{title}</div>
      <LinearProgress value={progress * 20 - 5} variant="determinate"/>
      <div className={classes.text}>{children}</div>
    </div>
  </main>
)

export default withStyles(styles)(Aside)
