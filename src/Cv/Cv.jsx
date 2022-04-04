import {Aside} from "./Aside/Aside"
import Section from "./Section"
import {Article} from "./Article"
import React from "react"
import {cssMixins} from "../utils/style"
import {makeStyles} from "@material-ui/styles"
import {useI18n} from "../i18n/I18nContext"
import {Tag} from './Tag/Tag'

const useStyles = makeStyles(t => ({
  content: {
    background: t.palette.background.paper,
    padding: t.spacing(4),
    lineHeight: cssMixins.lineHeight,
    display: 'flex',
  },
  body: {
    flex: 1,
  },
}))

export const Cv = () => {
  const css = useStyles()
  const i18n = useI18n()
  return (
    <div className={css.content}>
      <div className={css.body}>
        <Aside/>
        <Section title={i18n.skills.label}>
          {i18n.skills.items.map(skill =>
            <Tag key={skill}>{skill}</Tag>
          )}
        </Section>
        <Section icon="school" title={i18n.education.label}>
          {i18n.education.articles.map((e, i) =>
            <Article
              key={i}
              title={e.title}
              honor={e.honor}
              period={e.period}
              location={e.location}
              logo={e.logo}
            >
              {/*<span dangerouslySetInnerHTML={{__html: e.content}}/>*/}
            </Article>
          )}
        </Section>

        <Section icon="business_center" title={i18n.work.label}>
          {i18n.work.articles.map((e, i) =>
            <Article
              key={i}
              title={e.title}
              honor={e.honor}
              period={e.period}
              location={e.location}
              logo={e.logo}
            >
              <span dangerouslySetInnerHTML={{__html: e.content}}/>
            </Article>
          )}
        </Section>

        {i18n.volonteer && (
          <Section title={i18n.volonteer.label}>
            {i18n.volonteer.articles.map((e, i) =>
              <Article
                key={i}
                title={e.title}
                period={e.period}
                location={e.location}
                logo={e.logo}
              >
                <span dangerouslySetInnerHTML={{__html: e.content}}/>
              </Article>
            )}
          </Section>
        )}
      </div>
    </div>
  )
}
