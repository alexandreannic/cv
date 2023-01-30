export const cvHuEn = {
  job: 'Software engineer',
  location: 'Paris Area, France',
  education: {
    label: 'Education',
    articles: [
      {
        title: 'Master Science and Software Technology',
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
    ]
  },
  work: {
    label: 'Work experiences',
    articles: [
      {
        title: 'MEAL Officer',
        location: 'Première Urgence Internationale - Poland (Ukraine Emergency)',
        period: 'April 2022 - May 2022',
        content: `
          Digitalized forms using Kobo.
Training and technical support of the program teams.
Created and managed databases and visualisation tools allowing program monitoring and reporting.
Set up FCRM mechanisms.
Maintained project monitoring tools updated.
        `
      },
      {
        title: 'Software Engineer',
        location: 'beta.gouv, French Ministry of Economics - Paris',
        period: '2020 - 2022 (2 years)',
        content: `
          Developed <b>signal.conso.gouv.fr</b> application related to fraud control allowing consumers
          to report grievances related to private companies via a highly customisable form. Created dashboards for
          fraud control displaying data, statistics and relevant information computed by an AI.
        `
      },
      {
        title: 'Big Data engineer',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 year)',
        content: `
          Developed a system for large commercial companies allowing via an interface to
          create, deploy and monitor applications' pipelines distributed on several servers
          in order to import, transform and analyse GB of daily data.
        `
      },
      {
        logo: 'particeep.jpg',
        title: 'Software engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (3 years)',
        content: `
          Led a team of computer engineers and created several strongly secured Web applications for financial companies
          to manage fundraisings, bank transactions, graphics, customisable forms to define customers needs,
          etc.
        `
      },
      // {
      //   logo: 'upmc.png',
      //   title: 'Master 1 semester project',
      //   location: 'UPMC (University Pierre et Marie Curie) - Paris',
      //   period: '2015 (6 months)',
      //   content: `
      //   Implemented autoscalling registry inspired by DHT based on an application of distributed
      //   components, using technologies as Future, Socket, Thread and RMI.
      // `
      // },
      {
        title: 'Internship in computer research',
        location: 'LRI (Computer Research Laboratory) - Orsay',
        period: '2013 (3 months)',
        content: `
          Worked on the Grid Observatory project related to the Large Hadron Collider LHC.
          Reconstructed a flow of +200Go/month from 250 sources of inconsistent grid usage traces to make
          them workable for researchers.
        `
      },
    ]
  },
  skills: {
    label: `Skills`,
    items: [
      `Database design`,
      // `Database administration`,
      `Excel macro`,
      `Microsoft Office`,
      `VBA`,
      `Building graphic products`,
      `Building data visualizations`,
      // `Developing applications`,
      `Data analysis`,
      `Data computation`,
      `Data protection`,
      `Team recruitment`,
      `Team management`,
    ]
  },
  volonteer: {
    label: 'Various',
    articles: [
      {
        title: `Volunteer with the French Red Cross`,
        location: 'Brittany, France',
        period: 'since 2022'
      },
      {
        title: 'Volunteer firefighter',
        location: 'Brittany, France',
        period: 'since 2021',
        description: `In formation`
      },
    ]
  },
  various: {
    label: 'Various',
    articles: [
      'Diploma for youth leaders and workers (BAFA)',
      `<div style="white-space: nowrap">Daily sport: Crossfit, climbing, running</div>`,
      'Driving licence',
    ]
  }
}
