import styles from './style.module.scss'
import { DarkIcon, LightIcon } from '../../assets/icon'
import { useTheme, useThemeUpdate } from '../../utils/ThemeContext'

function Toggle() {
  const theme = useTheme()

  // context 상태 업데이트 함수 : 토글 클릭할 때마다 theme 상태 변한다.
  const onToggleTheme = useThemeUpdate()

  return (
    <label className={styles.toggle}>
      <input type='checkbox' checked={theme} onChange={onToggleTheme} />
      <span className={styles.slider}>
        <img className={(styles.icon, styles.dark)} src={DarkIcon} alt='darkicon' />
        <img className={(styles.icon, styles.light)} src={LightIcon} alt='lighticon' />
      </span>
    </label>
  )
}

export default Toggle
