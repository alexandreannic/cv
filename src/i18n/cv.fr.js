import React from "react"
import {AsideSection} from "../Cv/Aside/AsideSection"

export const cvFr = {
  education: [
    {
      title: 'Master STL (Science and Software Technology)',
      honor: 'With high honours',
      period: '2016',
      location: 'UPMC (University Pierre et Marie Curie) - Paris',
      logo: 'upmc.png',
      content: `
        Algorithmic (compression, hash methods, 2D geometry) -
        Multithreaded and distributed programming
        (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) -
        Web app (security, tracking)
    `
    },
    {

      title: 'Bachelor in computer science',
      honor: 'With high honours',
      period: '2014',
      location: 'UPMC (University Pierre et Marie Curie) - Paris',
      content: `
        Algorithmic (complexity, data structure, recursion) -
        OOP - Designs patterns -
        Databases (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)`,
    },
    {
      title: 'DUT of computer science', //  (two-year university degree in technology
      period: '2013',
      location: 'IUT d\'Orsay',
      logo: 'logo.jpg',
      content: `
        Unix architecture, bash, script -
        POO <code>Java</code>, <code>C++</code> -
        Database -
        System programming in C (pipe, signal, fork, thread) -
        Networking (DHCP, DNS, Firewall) -
        Computer architecture
      `,
    },
  ],
  work: [

    {
      logo: 'particeep.jpg',
      title: 'Full-stack engineer',
      location: 'Particeep - Paris',
      period: '2016 - 2019"',
      content: `
            Led front team and created several applications from scratch
            in <code>React</code>/<code>Angular</code>, <code>Scala</code> and with continuous integration
            with <code>Jenkins</code> as <b>Medef accélerateur</b>.<br/>
            Contributing to evolution of a REST and a <code>GraphQL</code> API wrote in <code>Scala</code>.<br/>
            Developed SDK for <code>JavaScript</code>, <code>PHP</code> and <code>Scala</code>.<br/>
            Organized workshops for my team on topics like <code>JavaScript</code>-<code>CSS</code> good practices
            and performances, <code>Angular2</code> or again <code>flexbox</code>.
          `
    },
    {
      logo: 'particeep.jpg',
      title: 'Full-stack developer internship',
      location: 'Particeep - Paris',
      period: '2016',
      content: `
        Contributing to evolution of a large SaaS application wrote in <code>Play framework
        1</code> and <code>AngularJS</code>. I refactored a large part of the application to improve
        performances, code readability and
        reusability. Remove the whole <code>css</code> to create a solid <code>Less</code> design so I
        could implement a new feature to allow users to edit the theme application for their instances. Also adding
        features to edit automatic mails with variabilisations.
      `
    },
    {
      logo: 'activa.png',
      title: 'Full-stack developer',
      location: 'Activa Informatique - Paris',
      period: 'Summers 2013, 2014 and 2015',
      content: `
        Developping features on a SaaS application like appointments calendar, real-time chat, statistics and
        refactoring front side with the following stack:&nbsp;
        <code>Play framework 1</code>, <code>JPA</code>, <code>JQuery</code>
        <br/>
        Developing couple websites in <code>PHP</code> for association or hotel.
      `
    },
    {
      logo: 'upmc.png',
      title: 'Semester student project',
      location: 'UPMC (University Pierre et Marie Curie) - Paris',
      period: '6 months - 2015',
      content: `
        Based on an application of distributed components, my goal was to implement a distributed registry inspired
        by DHT allowing to "colonize" the machines of a network to avoid requests saturation.<br/>
        <code>Java</code> (Future, Socket, multithreading, RMI) and scripts <code>Perl</code>.
      `
    },
    {
      title: 'Internship in computer research',
      location: 'LRI (Computer Research Laboratory) - Orsay',
      period: '3 months - 2013"',
      content: `
        I worked for the Grid Observatory project whose purpose is to contribute to an experimental theory of large
        grid
        systems by integrating the collection of data on the behaviour of the flagship European Grid Infrastructure.
        My mission was to reconstruct the grid usage traces to make them accessible to researchers.<br/>
        <code>Perl</code> <code>SQL</code> <code>Script shell</code>
      `
    },
    {
      logo: 'upmc.png',
      title: 'Création d\'une application concurrente et répartie',
      location: 'Projet universitaire de Master 1',
      period: '2 mois - 2015',
      content: `
          Permet à des musiciens d'effectuer des jams sessions en temps réel.
          Développement du serveur <code>TCP/IP</code> en <code>C</code> redistribuant les sons
          mixés selon les musiciens et anticipant le délai et les instabilités du réseau.
          Développement du client en <code>Java</code> avec interface Swing (inscription, gestion des
          salons, jouer).
         `
    },

  ],
  skills: [
    {
      title: 'Framework',
      content: [
        {
          logo: "dev/angular.png",
          title: "Angular (2+)",
          rate: 5,
          content: `
              Used in larges applications (~200 components) sometimes coupled <Code>ngrx</Code>.
            `,
        },
        {
          logo: "dev/react.png",
          title: "React",
          rate: 5,
          content: `
              Used in large application (+100 components) sometimes coupled
              with <Code>Redux</Code> and <Code>TypeScript</Code>.
            `
        },
        {
          logo: "dev/angularjs.png",
          title: "AngularJS",
          rate: 4
        },
        {
          logo: "dev/play.png",
          title: "Play framework",
          rate: 4
        }
      ]
    },
    {
      title: 'Languages',
      content: [
        {
          logo: "dev/ts.png",
          title: "TypeScript",
          rate: 5,
        },
        {
          logo: "dev/javascript.png",
          title: "JavaScript",
          rate: 5,
        },
        {
          logo: "dev/scala.png",
          title: "Scala",
          rate: 3,
        },
        {
          logo: "dev/java.png",
          title: "Java",
          rate: 4,
        },
        {
          logo: "dev/csharp.png",
          title: "C#",
          rate: 2.5,
        },
        {
          logo: "dev/c++.png",
          title: "C/C++",
          rate: 3,
        },
        {
          logo: "dev/perl.png",
          title: "Perl",
          rate: 3.5,
        }
      ]
    },
    {
      title: 'Persistence',
      content: [
        {title: 'SQL', rate: 4.5},
        {title: 'NoSQL', rate: 3},
      ]
    }
  ],
  various: [
    'Diploma for youth leaders and workers (BAFA)',
    'Sport: Crossfit, climbing, running',
    'Driving licence',
  ]
}
