import { useCallback, useState } from 'react'
import styles from './styles.module.scss'

import classnames from 'classnames'
import Tabs from '../Tabs'
import { TAB_MENU } from '../../constants/TAB_MENU'
import { useTheme } from '../../utils/ThemeContext'

function Container() {
  const theme = useTheme()

  // 현재 활성화된 탭의 상태를 저장.
  const [curTab, setCurTab] = useState(0)

  // 선택된 탭의 콘텐츠를 렌더링.
  const renderCurTabContent = useCallback(() => {
    return TAB_MENU.filter((tab) => tab.id === curTab)[0].component
  }, [curTab])

  return (
    <div className={classnames(styles.container, { 'styles.dark': theme })}>
      <div className={styles.tabs}>
        <Tabs curTab={curTab} onChange={setCurTab} tabList={TAB_MENU} />
      </div>
      <div className={styles.content}>{renderCurTabContent()}</div>
    </div>
  )
}

export default Container
