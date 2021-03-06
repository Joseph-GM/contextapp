import React, {createContext, useState} from 'react'

export const ThemeContext = createContext({});

function ThemeContextProvider({children}) {
    
    const [themeState, setThemeState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
    });
    const {isLightTheme} = themeState;
    const toggleTheme = () => {
        setThemeState({
            ...themeState,
            'isLightTheme': !isLightTheme
        });
        console.log('in function toggleTheme : ', isLightTheme);
    }
    return (
        <ThemeContext.Provider value={{themeState, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
