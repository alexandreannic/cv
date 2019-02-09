import {Aside} from "./Aside/Aside"
import Section from "./Section"
import {Article} from "./Article"
import Code from "../utils/Code"
import React from "react"
import {cssMixins} from "../utils/style"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles(t => ({
  content: {
    padding: t.spacing.unit * 2,
    lineHeight: cssMixins.lineHeight,
    display: 'flex',
  },
  body: {
    flex: 1,
  },
}))

export const Cv = () => {
  const css = useStyles()
  return (
    <div className={css.content}>
      <Aside/>
      <div className={css.body}>
        <Section icon="school" title="Education">
          <Article
            title="Master STL (Science and Software Technology)"
            honor="With high honours"
            period="2016"
            location="UPMC (University Pierre et Marie Curie) - Paris"
            logo="upmc.png"
          >
            Algorithmic (compression, hash methods, 2D geometry) -
            Multithreaded and distributed programming
            (<Code>Scala</Code>, <Code>OCaml</Code>, <Code>Java</Code>, <Code>C</Code>) -
            Web app (security, tracking)
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
            Databases (transactions, <Code>SQL3</Code>, <Code>PL/SQL</Code>, <Code>NoSQL</Code>, <Code>XPath</Code>)
          </Article>
          <Article
            title="DUT of computer science" //  (two-year university degree in technology)
            period="2013"
            location="IUT d'Orsay"
            logo="logo.jpg"
          >
            Unix architecture, bash, script -
            POO <Code>Java</Code>, <Code>C++</Code> -
            Database -
            System programming in C (pipe, signal, fork, thread) -
            Networking (DHCP, DNS, Firewall) -
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
            Contributing to evolution of a large SaaS application wrote in <Code>Play framework 1</Code> and <Code>AngularJS</Code>. I refactored a large part of the application to improve
            performances, code readability and
            reusability. Remove the whole <Code>css</Code> to create a solid <Code>Less</Code> design so I
            could implement a new feature to allow users to edit the theme application for their instances. Also adding
            features to edit automatic mails with variabilisations.
          </Article>
          <Article
            logo="activa.png"
            title="Full-stack developer"
            location="Activa Informatique - Paris"
            period="Summers 2013, 2014 and 2015"
          >
            Developping features on a SaaS application like appointments calendar, real-time chat, statistics and
            refactoring front side with the following stack:&nbsp;
            <Code>Play framework 1</Code>, <Code>JPA</Code>, <Code>JQuery</Code>
            <br/>
            Developing couple websites in <Code>PHP</Code> for association or hotel.
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
  )
}
