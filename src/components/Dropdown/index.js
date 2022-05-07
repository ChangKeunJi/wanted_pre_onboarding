import { useTheme } from '../../utils/ThemeContext'
import classnames from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import './styles.scss'
import { ArrowBottom, Search } from '../../assets/icon/index'
import useInput from '../../utils/useInput'
import { DROPDOWN_ITEM } from '../../constants/DROPDOWN_ITEM'

function Dropdown() {
  const theme = useTheme()

  // 드랍다운의 오픈 상태.
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 아이템 리스트 상태와 업데이트
  const [itemList, setItemList] = useState(DROPDOWN_ITEM)

  // 현재 선택된 아이템 나타내는 메인 인풋.
  const [mainInput, setMainInput] = useState(DROPDOWN_ITEM[0].value)

  // 드랍다운 내에서 검색할 수 있는 인풋.
  const [modalInput, onChangeModalInput] = useInput('')

  // 메인 인풋을 클릭하면 드랍다운의 표시 여부 결정.
  const onClickInput = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  // 아이템을 클릭하면 메인 인풋에 해당 아이템 표시.
  const onClickItem = useCallback(
    (item) => () => {
      setMainInput(item.value)
      setIsModalOpen(false)
    },
    []
  )

  // 드랍다운 인풋창이 업데이트 될 때마다 리스트도 업데이트 된다.
  useEffect(() => {
    const filteredList = DROPDOWN_ITEM.filter((item) => item.value.toLowerCase().includes(modalInput.toLowerCase()))

    setItemList(filteredList)
  }, [modalInput])

  return (
    <div className={classnames('dropdown', { '--dark': theme })}>
      <div aria-hidden='true' className='dropdown__main' onClick={onClickInput}>
        <input readOnly value={mainInput} />
        <img className='dropdown__main__arrow' src={ArrowBottom} alt='arrow' />
      </div>
      {isModalOpen && (
        <div className='dropdown__modal'>
          <div className='dropdown__modal__wrapper'>
            <input value={modalInput} onChange={onChangeModalInput} />
            <img className='dropdown__modal__wrapper__search' src={Search} alt='search' />

            <ul>
              {itemList.map((item) => {
                return (
                  <button
                    type='button'
                    onClick={onClickItem(item)}
                    className='dropdown__modal__wrapper__item'
                    key={item.id}
                  >
                    {item.value}
                  </button>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
