import Toggle from './components/Toggle'
import Container from './components/Container'
import { useTheme } from './utils/ThemeContext'
import './scss/index.scss'
import classnames from 'classnames'

function App() {
  const theme = useTheme()
  return (
    <div className={classnames('page', { '--dark': theme })}>
      <Toggle />
      <Container />
    </div>
  )
}

export default App
