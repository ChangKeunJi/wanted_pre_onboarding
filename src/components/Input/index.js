import { useTheme } from "../../utils/ThemeContext";
import {
	PasswordEye,
	CheckSign,
	CheckSignGray,
	PasswordEyeWatch,
} from "../../assets/icon/index.js";
import classnames from "classnames";
import "./style.scss";
import useInput from "../../utils/useInput.js";
import { useRef, useCallback, useEffect, useState } from "react";
import { validateEmail } from "../../utils/validateEmail";

const Input = () => {
	const theme = useTheme();
	const passwordInputRef = useRef(null);
	const emailInputRef = useRef(null);

	const [emailFocused, setEmailFocused] = useState(false);

	const [emailValidate, setEmailValidate] = useState(false);
	const [watchPassword, setWatchPassword] = useState(false);

	const [emailValue, onChangeEmail] = useInput("");
	const [passwordValue, onChangePassword] = useInput("");

	const onClickPasswordEye = useCallback(
		(e) => {
			setWatchPassword((prev) => !prev);

			passwordInputRef.current.type = watchPassword ? "password" : "text";
		},
		[watchPassword, passwordInputRef]
	);

	const renderWarning = useCallback(() => {
		if (!emailValidate) {
			return (
				<p className="input__email__warning">
					{emailValue.length > 0 && "올바르지 않은 Email 입니다."}
				</p>
			);
		}
	}, [emailValidate, emailValue]);

	useEffect(() => {
		validateEmail(emailValue)
			? setEmailValidate(true)
			: setEmailValidate(false);
	}, [emailValue]);

	return (
		<div className={classnames("input", { "--dark": theme })}>
			<form>
				<div className="input__email">
					<label htmlFor="email">Email</label>
					<br />
					<input
						value={emailValue}
						onChange={onChangeEmail}
						className="input__email__input"
						id="email"
						type="email"
						onBlur={() => setEmailFocused(false)}
						onFocus={() => setEmailFocused(true)}
					/>
					<img
						className="input__email__icon"
						src={emailValidate ? CheckSign : CheckSignGray}
						alt="email-check"
						ref={emailInputRef}
					/>
					{!emailFocused && renderWarning()}
				</div>

				<div className="input__password">
					<label htmlFor="password">Password</label>
					<br />
					<input
						value={passwordValue}
						onChange={onChangePassword}
						className="input__password__input"
						id="password"
						type="password"
						ref={passwordInputRef}
					/>
					<img
						className="input__password__icon"
						src={watchPassword ? PasswordEyeWatch : PasswordEye}
						alt="password-eye"
						onClick={onClickPasswordEye}
					/>
				</div>
			</form>
		</div>
	);
};

export default Input;
