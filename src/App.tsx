import { useTranslation } from 'react-i18next'
import styles from './App.module.scss'

function App() {
  const { t } = useTranslation()

  return <h1 className={styles.text}>{`${t('app.hello')} ${t('app.test')}`}</h1>
}

export default App
