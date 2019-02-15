import {Aside} from "./Aside/Aside"
import Section from "./Section"
import {Article} from "./Article"
import Code from "../utils/Code"
import React from "react"
import {cssMixins} from "../utils/style"
import {makeStyles} from "@material-ui/styles"
import {useI18n} from "../i18n/I18nContext"

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
  const i18n = useI18n()
  return (
    <div className={css.content}>
      <Aside/>
      <div className={css.body}>
        <Section icon="school" title={i18n.education.label}>
          {i18n.education.articles.map(e =>
            <Article
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

        <Section icon="business_center" title={i18n.work.label}>
          {i18n.work.articles.map(e =>
            <Article
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
      </div>
    </div>
  )
}
