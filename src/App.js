import {withStyles} from "@material-ui/core"
import Section from "./body/Section"
import {Aside} from "./body/Aside/Aside"
import Code from "./utils/Code"
import {Article} from "./body/Article"
import React from "react"
import {cssMixins} from "./utils/style"

const styles = t => ({
  root: {
    padding: t.spacing.unit * 2,
  },
  content: {
    lineHeight: cssMixins.lineHeight,
    display: 'flex',
  },
  body: {
    flex: 1,
  },
  limit: {
    height: 1,
    background: 'red',
    position: 'absolute',
    right: 0,
    left: 0,
    top: '29.7cm'
  }
})

const App = ({classes}) =>
  <main className={classes.root}>
    {/*<Header/>*/}
    <div className={classes.content}>
      <Aside/>
      <div className={classes.body}>
        <Section icon="school" title="Education">
          <Article
            title="Master STL (Science and Software Technology)"
            honor="With high honours"
            period="2016"
            location="UPMC (University Pierre et Marie Curie) - Paris"
            logo="upmc.png"
          >
            Advanced algorithmic (compression, hash methods, 2D geometry) -
            Multithreaded and distributed programming (<Code>Scala</Code>, <Code>Java</Code>, <Code>C</Code>) -
            Web applications (security, tracking)
          </Article>
          <Article
            title="Bachelor in computer science"
            honor="With high honours"
            period="2014"
            location="UPMC (University Pierre et Marie Curie) - Paris"
            logo="upmc.png"
          >
            Algorithmic (complexity, data structure, recursion) -
            OOP - Designs patterns -
            Databases (trigger,
            transactions, <Code>SQL3</Code>, <Code>PL/SQL</Code>, <Code>NoSQL</Code>, <Code>XSLT</Code>) - Statistics
          </Article>
          <Article
            title="DUT of computer science" //  (two-year university degree in technology)
            period="2013"
            location="IUT d'Orsay"
            logo="logo.jpg"
          >
            Unix architecture, shell usage, script -
            POO Java, C++ -
            Database -
            System programming in C (socket, pipe, signal, fork, thread) -
            Networking -
            Computer architecture
          </Article>
        </Section>

        <Section icon="business_center" title="Work experiences">
          <Article
            logo="particeep.jpg"
            title="Full-stack engineer"
            location="Particeep - Paris"
            period="2016 - 2019">
            Led front team and created several applications from scratch
            in <Code>React</Code>/<Code>Angular</Code>, <Code>Scala</Code> and with continuous integration
            with <Code>Jenkins</Code> as <b>Medef accélerateur</b>.<br/>
            Contributing to evolution of a REST and a <Code>GraphQL</Code> API wrote in <Code>Scala</Code>.<br/>
            Developed SDK for <Code>JavaScript</Code>, <Code>PHP</Code> and <Code>Scala</Code>.<br/>
            Organized workshops for my team on topics like <Code>JavaScript</Code>-<Code>CSS</Code> good practices
            and performances, <Code>Angular2</Code> or again <Code>flexbox</Code>.


            {/*<Li>*/}
            {/*Développement de l'intégralité de la partie front en <Code>React</Code> de l'application*/}
            {/*<i>Medef accélerateur</i>.*/}
            {/*</Li>*/}
            {/*<Li>*/}
            {/*Développement d'une plateforme d'investissement. Back <Code>Scala</Code>, front&nbsp;*/}
            {/*<Code>Angular2+</Code>*/}
            {/*</Li>*/}
            {/*<Li>*/}
            {/*Développement d'un module de formulaire:*/}
            {/*<Li> Module API <Code>Scala</Code></Li>*/}
            {/*<Li>*/}
            {/*Module d'editeur (fonctionnalités équivalentes à Google Forms)*/}
            {/*&nbsp;<Code>Angular2+</Code>*/}
            {/*</Li>*/}
            {/*<Li> Module de réponse au formulaire en <Code>React</Code></Li>*/}
            {/*</Li>*/}
          </Article>
          <Article
            logo="particeep.jpg"
            title="Full-stack developer internship"
            location="Particeep - Paris"
            period="2016"
          >
            Contributing to evolution of a large SaaS application wrote in <Code>Play! framework
            Java</Code> and <Code>AngularJS</Code>. I refactored a large part of the application to improve
            performances, code readability and
            reusability. Remove the whole <Code>css</Code> to create a solid <Code>Less</Code> design so I
            could implement a new feature to allow users to edit the theme application for their instances. Also adding
            features to edit automatic mails with variabilisations.
          </Article>
          <Article
            logo="activa.png"
            title="Full-stack developer"
            location="Activa Informatique - Paris"
            period="Summers 2014 and 2015"
          >
            Developping features on a Saas application like appointments calendar, real-time chat, statistics and
            refactoring front side.<br/>
            Stack: <Code>Play! framework</Code>, <Code>Java</Code>, <Code>JPA/Hibernate</Code>, <Code>JQuery</Code>
          </Article>
          <Article
            logo="upmc.png"
            title="Semester student project"
            location="UPMC (University Pierre et Marie Curie) - Paris"
            period="6 months - 2015"
          >
            Based on an application of distributed components, my goal was to implement a distributed registry inspired
            by DHT allowing to "colonize" the machines of a network to avoid requests saturation.<br/>
            Java (Future, Socket, multithreading, RMI) and scripts Perl.
          </Article>
          <Article
            title="Internship in computer research"
            location="LRI (Computer Research Laboratory) - Orsay"
            period="3 months - 2013">
            I worked for the Grid Observatory project whose purpose is to contribute to an experimental theory of large
            grid
            systems by integrating the collection of data on the behaviour of the flagship European Grid Infrastructure.
            My mission was to reconstruct the grid usage traces to make them accessible to researchers.<br/>
            <Code>Perl</Code> <Code>SQL</Code> <Code>Script shell</Code>
          </Article>
          {/*<Article*/}
          {/*logo="upmc.png"*/}
          {/*title="Création d'une application concurrente et répartie"*/}
          {/*location="Projet universitaire de Master 1"*/}
          {/*period="2 mois - 2015"*/}
          {/*>*/}
          {/*Permet à des musiciens d'effectuer des jams sessions en temps réel.*/}
          {/*Développement du serveur <Code>TCP/IP</Code> en <Code>C</Code> redistribuant les sons*/}
          {/*mixés selon les musiciens et anticipant le délai et les instabilités du réseau.*/}
          {/*Développement du client en <Code>Java</Code> avec interface Swing (inscription, gestion des*/}
          {/*salons, jouer).*/}
          {/*</Article>*/}
        </Section>
      </div>
    </div>
    <div className={classes.limit}/>
  </main>

export default withStyles(styles)(App)

