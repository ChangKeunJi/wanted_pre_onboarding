import React, { useCallback, useContext, useState } from "react";

// 현재 다크모드인지 아닌지 나타낸다.
const ThemeContext = React.createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

// theme을 변경해주는 함수.
const ThemeUpdateContext = React.createContext();

export const useThemeUpdate = () => {
	return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = useCallback(() => {
		setDarkTheme((prev) => !prev);
	}, []);

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
