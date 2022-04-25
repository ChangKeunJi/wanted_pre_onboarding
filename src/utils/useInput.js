import { useCallback, useState } from "react";

const useInput = (val = "hello") => {
	const [value, setValue] = useState(val);

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return [value, onChange];
};

export default useInput;
