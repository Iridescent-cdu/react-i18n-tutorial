import { Trans, Translation, useTranslation, withTranslation } from 'react-i18next'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => i18n.changeLanguage('zh')}>
          zh
        </button>
        <button onClick={() => i18n.changeLanguage('en')}>
          en
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>{t('hello', { ns: 'common' })}</div>

      <Translation>
        {
          (t) => <div>{t('userInfo.name')}</div>
        }
      </Translation>
      <TranslationText />
      <Trans ns='common' i18nKey="title" count={1}>
        {{ title: 'React' }}
      </Trans>
    </>
  )
}

const TranslationText = withTranslation()(({ t }) => {
  return <div>{t('userInfo.age')}</div>
})

export default App
