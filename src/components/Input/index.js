import { useTheme } from '../../utils/ThemeContext'
import { PasswordEye, CheckSign, CheckSignGray, PasswordEyeWatch } from '../../assets/icon/index'
import classnames from 'classnames'
import styles from './style.module.scss'
import useInput from '../../utils/useInput'
import { useRef, useCallback, useEffect, useState } from 'react'
import { validateEmail } from '../../utils/validateEmail'

function Input() {
  const theme = useTheme()

  const passwordInputRef = useRef(null)
  const emailInputRef = useRef(null)

  const [emailFocused, setEmailFocused] = useState(false)
  const [emailValidate, setEmailValidate] = useState(false)
  const [watchPassword, setWatchPassword] = useState(false)

  const [emailValue, onChangeEmail] = useInput('')
  const [passwordValue, onChangePassword] = useInput('')

  // 아이콘 클릭을 통해 패스워드 텍스트를 숨기거나 보이는 함수.
  const onClickPasswordEye = useCallback(
    (e) => {
      setWatchPassword((prev) => !prev)

      // input 태그의 타입을 변경.
      passwordInputRef.current.type = watchPassword ? 'password' : 'text'
    },
    [watchPassword, passwordInputRef]
  )

  // email 입력창의 포커스가 아웃되었을 때 email이 올바르지 않으면 경고 문자 렌더링.
  const renderWarning = useCallback(() => {
    if (!emailValidate) {
      return <p className='input__email__warning'>{emailValue.length > 0 && '올바르지 않은 Email 입니다.'}</p>
    }
    return ''
  }, [emailValidate, emailValue])

  // 이메일 텍스트가 변할 때마다 유효한 이메일인지 상태 업데이트.
  useEffect(() => {
    validateEmail(emailValue) ? setEmailValidate(true) : setEmailValidate(false)
  }, [emailValue])

  return (
    <div className={classnames(styles.input, { 'styles.dark': theme })}>
      <form>
        <div className={styles.email}>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            value={emailValue}
            onChange={onChangeEmail}
            className={styles.emailInput}
            id='email'
            type='email'
            onBlur={() => setEmailFocused(false)}
            onFocus={() => setEmailFocused(true)}
          />
          <img
            className={styles.emailIcon}
            src={emailValidate ? CheckSign : CheckSignGray}
            alt='email-check'
            ref={emailInputRef}
          />
          {!emailFocused && renderWarning()}
        </div>

        <div className={styles.emailPassword}>
          <label htmlFor='password'>Password</label>
          <br />
          <input
            value={passwordValue}
            onChange={onChangePassword}
            className={styles.emailPasswordInput}
            id='password'
            type='password'
            ref={passwordInputRef}
          />
          <a href='#' onClick={onClickPasswordEye}>
            <img
              className={styles.passwordIcon}
              src={watchPassword ? PasswordEyeWatch : PasswordEye}
              alt='password-eye'
            />
          </a>
        </div>
      </form>
    </div>
  )
}

export default Input
