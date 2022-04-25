const emailReg =
	/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

export const validateEmail = (val) => {
	return emailReg.test(val);
};
