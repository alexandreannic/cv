import React from "react"
import {withStyles} from "@material-ui/core"
import Section from "./body/Section"
import Aside from "./body/Aside"
import Li from "./utils/Li"
import Code from "./utils/Code"
import {Article} from "./body/Article"

export const rem = ratio => 10 * ratio
export const fontSmall = rem(1.1)
export const fontBig = rem(1.4)
export const fontTitle = rem(1.8)
export const font = rem(1.2)
export const lineHeight = 1.4

const styles = t => ({
  '@global': {
    body: {
      fontFamily: 'Google Sans'
    }
  },
  root: {
    lineHeight: lineHeight,
    display: 'flex',
  },
  body: {
    flex: 1,
  },
})

const App = ({classes}) =>
  <main className={classes.root}>
    <Aside/>
    <div className={classes.body}>
      <Section icon="school" title="Formation">
        <Article
          title="Master Science et Technologie du Logiciel"
          period="2016"
          location="Université Pierre et Marie Curie - Paris"
          logo="upmc.png"
        >
          Mention Bien
        </Article>
        <Article
          title="Licence Informatique"
          period="2014"
          location="Université Pierre et Marie Curie - Paris"
          logo="upmc.png"
        >
          Mention Bien
        </Article>
        <Article
          title="DUT Informatique"
          period="2013"
          location="IUT d'Orsay"
          logo="logo.jpg"
        />
      </Section>
      <Section icon="school" title="Expériences">
        <Article
          logo="particeep.jpg"
          title="Développeur full-stack"
          location="Particeep - Paris"
          period="2016 - 2018">
          <Li>
            Développement de l'intégralité de la partie front en <Code>React</Code> de l'application
            <i>Medef accélerateur</i>.
          </Li>
          <Li>
            Développement d'une plateforme d'investissement. Back <Code>Scala</Code>, front&nbsp;
            <Code>Angular2+</Code>
          </Li>
          <Li>
            Développement d'un module de formulaire:
            <Li> Module API <Code>Scala</Code></Li>
            <Li>
              Module d'editeur (fonctionnalités équivalentes à Google Forms)
              &nbsp;<Code>Angular2+</Code>
            </Li>
            <Li> Module de réponse au formulaire en <Code>React</Code></Li>
          </Li>
        </Article>
        <Article
          logo="particeep.jpg"
          title="Développeur full-stack"
          location="Particeep - Paris"
          period="2016 - 2018"
        >

        </Article>
        <Article
          logo="activa.png"
          title="Développement d'une application Sass"
          location="Activa Informatique - Paris"
          period="Etés 2015, 2016"
        >
          Refonte complète de l'interface d'une application <Code>Play! framework</Code> écrite en
          <Code>Java</Code>.<br/>
          (ergonomie, performances, responsive). Développement de modules (calendrier, messagerie interne,
          statistiques, …)
        </Article>
        <Article
          logo="upmc.png"
          title="Développement d'une application distribuées"
          location="Projet universitaire semestriel de Master 1"
          period="6 mois - 2015"
        >
          Implementation d'un registre global permettant de "coloniser" les machines d'un
          réseau pour limiter le déclin des performances. L'interrogation du
          registre par les composants s'inspire du principe des DHT.
        </Article>
        <Article
          logo="upmc.png"
          title="Création d'une application concurrente et répartie"
          location="Projet universitaire de Master 1"
          period="2 mois - 2015"
        >
          Permet à des musiciens d'effectuer des jams sessions en temps réel.
          Développement du serveur <Code>TCP/IP</Code> en <Code>C</Code> redistribuant les sons
          mixés selon les musiciens et anticipant le délai et les instabilités du réseau.
          Développement du client en <Code>Java</Code> avec interface Swing (inscription, gestion des
          salons, jouer).
        </Article>
      </Section>
    </div>
  </main>

export default withStyles(styles)(App)

