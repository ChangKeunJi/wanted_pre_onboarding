import { useCallback, useState } from 'react'
import './style.scss'
import { useTheme } from '../../utils/ThemeContext'
import { SLIDER_TARGET } from '../../constants/SLIDER_TARGET'
import classnames from 'classnames'

function Slider() {
  const theme = useTheme()

  const [value, setValue] = useState(0)

  // 슬라이더를 움직일 때마다 input value 업데이트.
  const handleSlider = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  // 퍼센테이지 클릭할 때 타겟의 숫자만큼 value 업데이트.
  const onClickTarget = useCallback((e) => {
    setValue(e.target.dataset.num)
  }, [])

  return (
    <div className={classnames('slider', { '--dark': theme })}>
      <div className='slider__result-box'>
        <p>
          {value} <span>%</span>
        </p>
      </div>
      <input type='range' min={0} max={100} onChange={handleSlider} className='slider__input' />
      <ul className='slider__target'>
        {SLIDER_TARGET.map((target, i) => {
          return (
            <button type='button' key={i} onClick={onClickTarget} data-num={target} className='slider__target__item'>
              {target}%
            </button>
          )
        })}
      </ul>
    </div>
  )
}

export default Slider
