import styles from './style.module.scss'
import classnames from 'classnames'
import { useCallback } from 'react'
import { useTheme } from '../../utils/ThemeContext'

function Tabs({ curTab, onChange, tabList }) {
  const theme = useTheme()

  // 다른 탭을 클릭할 때마다 현재 탭의 상태 업데이트.
  const onClick = useCallback((tab) => () => onChange(tab.id), [onChange])

  return (
    <div className={classnames(styles.tabs, { '--dark': theme })}>
      <ul className={styles.tabsWrap}>
        {tabList.map((tab) => {
          return (
            <li
              key={tab.id}
              className={classnames(styles.tabsItem, {
                '--active': curTab === tab.id,
              })}
              onClick={onClick(tab)}
            >
              {tab.label}
            </li>
          )
        })}
        <li className={styles.tabsSlider} />
      </ul>
    </div>
  )
}

export default Tabs
