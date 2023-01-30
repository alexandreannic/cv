import React, {createContext, useContext} from 'react'
// import {cvFr as cv} from "./cv.fr"
// import {cvEn as cv} from "./cv.en"
import {cvHuEn as cv} from "./cv.humanitarian.en"
import {usePersistentState} from 'react-persistent-state'

// const defaultLang = navigator.language === 'fr-FR' ? 'fr' : 'en'

const I18nContext = createContext({})

export const I18nContextProvider = ({children}) => {
  const [lang, changeLang] = usePersistentState('en', 'lang')
  return (
    <I18nContext.Provider value={{
      m: getMessagesByLang(lang),
      lang,
      changeLang
    }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const {m} = useContext(I18nContext)
  return m
}

export const useLang = () => {
  const {lang} = useContext(I18nContext)
  return lang
}

export const useChangeLang = () => {
  const {changeLang} = useContext(I18nContext)
  return changeLang
}

const getMessagesByLang = lang => {
  switch (lang) {
    // case 'fr':
    //   return cvFr
    default:
      return cv
  }
}
