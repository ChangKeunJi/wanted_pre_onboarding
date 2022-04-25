// input 창의 value와 상태변화 함수를 반환하는 커스텀 훅

import { useCallback, useState } from "react";

const useInput = (val = "hello") => {
	const [value, setValue] = useState(val);

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return [value, onChange];
};

export default useInput;
