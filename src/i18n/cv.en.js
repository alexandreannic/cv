export const cvEn = {
  job: 'Full-stack engineer',
  location: 'Paris Area, France',
  education: [
    {
      title: 'Master STL (Science and Software Technology)',
      honor: 'With high honours',
      period: '2016',
      location: 'UPMC (University Pierre et Marie Curie) - Paris',
      logo: 'upmc.png',
      content: `
        Algorithmic (compression, hash, 2D geometry) -
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
        <code>SQL</code> -
        System programming in <code>C</code> (pipe, signal, fork, thread) -
        Networking (DHCP, DNS, Firewall) -
        Computer architecture
      `,
    },
  ],
  work: [

    {
      logo: 'particeep.jpg',
      title: 'Software engineer',
      location: 'Particeep - Paris',
      period: '2016 - 2019',
      content: `
        Led front team and created several applications from scratch in <code>React</code>/<code>Angular</code>.
        Contributing to evolution of REST and <code>GraphQL</code> APIs wrote in <code>Scala</code>.<br/>
        Developed SDK for <code>JavaScript</code>, <code>PHP</code> and <code>Scala</code>.<br/>
        Organized tech talks about front-developement good practices and performances.
        <!--like <code>JavaScript</code>-<code>CSS</code> good practices-->
        <!--and performances, <code>Angular2</code> or again flexbox.-->
      `
    },
    {
      logo: 'particeep.jpg',
      title: 'Software developer internship',
      location: 'Particeep - Paris',
      period: '2016',
      content: `
        Contributing to evolution of a large SaaS application wrote in <code>Java</code> and <code>AngularJS</code>.<br/>
        Refactoring a large part to improve performances, code readability and reusability.<br/>
        Developing features as theme personalization, mails edition and form creation.
      `
    },
    {
      logo: 'activa.png',
      title: 'Software developer',
      location: 'Activa Informatique - Paris',
      period: 'Summers 2013, 2014 and 2015',
      content: `
        Developing features on a SaaS application like appointments calendar, real-time chat, statistics.
        Stack: <code>Java</code>, <code>JPA</code>, <code>JQuery</code>
        <br/>
        Developing websites in <code>PHP</code> for minor companies and associations.
      `
    },
    {
      logo: 'upmc.png',
      title: 'Software engineer',
      location: 'Event Catalyst',
      period: '6 months - 2016',
      content: `
        Creating a system to allow conferences organisation.
        Include development of an <code>ASP.NET</code> API, ab <code>ASP.NET</code> application and Android application
        providing features as QR-code check-in, form editing and filling, and visitors management.   
        <!--Include development of a <code>ASP.NET</code> application to allow administrator to manage visitors and -->
        <!--create form; an Android application allowing visitors to check-in through QR-code and answer the-->
        <!--form and an <code>ASP.NET</code> REST API to orchestrate both. -->
       `
    },
    {
      logo: 'upmc.png',
      title: 'Master 1 semester project',
      location: 'UPMC (University Pierre et Marie Curie) - Paris',
      period: '6 months - 2015',
      content: `
        Based on an application of distributed components, my goal was to implement a distributed and autoscalling
        registry inspired by DHT using technologies as Future, Socket, multithreading or RMI.<br/>
      `
    },
    {
      title: 'Internship in computer research',
      location: 'LRI (Computer Research Laboratory) - Orsay',
      period: '3 months - 2013',
      content: `
        Worked on the Grid Observatory project related to the flagship European Grid Infrastructure.
        My mission was to reconstruct a flow of +200Go/month from 250 sources of unorganized grid usage traces to make
        them workable by researchers.<br/>
      `
    },
  ],
  skills: [
    {
      title: 'Framework',
      content: [
        {
          logo: "dev/react.png",
          title: "React",
          rate: 5,
          content: `
            Used in large application sometimes coupled
            with <code>Redux</code> and <code>TypeScript</code>.
          `
        },
        {
          logo: "dev/angular.png",
          title: "Angular (2+)",
          rate: 5,
          content: `
            Used in larges applications sometimes coupled with <code>ngrx</code>.
          `,
        },
        {
          logo: "dev/angularjs.png",
          title: "AngularJS",
          rate: 4,
          content: `
            
          `
        },
        {
          logo: "dev/play.png",
          title: "Play framework",
          rate: 4,
          content: `
            Used both version to create SaaS app, REST and GraphQL API.
          `
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
          logo: "dev/php.png",
          title: "PHP",
          rate: 4,
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
        {
          title: 'SQL',
          rate: 4.5,
          // content: `
          //   Mainly <code>PostGres</code> anad <code>MySQL</code>. Script <code>PL/SQL</code>
          // `
        },
        {
          title: 'NoSQL',
          rate: 3,
          // content: `Used document-oriented databases mainly during studies projects`
        },
      ]
    }
  ],
  various: [
    'Diploma for youth leaders and workers (BAFA)',
    `<div style="white-space: nowrap">Daily sport: crossfit, climbing, running</div>`,
    'Driving licence',
  ]
}
