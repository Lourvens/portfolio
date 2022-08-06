import React from 'react';

type themeType = 'dark' | 'light' | 'elegant'

const UseTheme = () => {
  const [theme, setTheme] = React.useState<themeType>();
  const updateTheme = (value: themeType) => {
    document.body.classList.remove(theme as string);
    document.body.classList.add(value);
    setTheme(value);
    localStorage.setItem('theme', value);
  };

  const initialValue = { theme, updateTheme };
  const themeContext = React.createContext(initialValue);

  React.useEffect(() => {
    const isSysDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) localStorage.setItem('theme', isSysDarkTheme ? 'dark' : 'light');
    const defaultTheme = localStorage.getItem('theme') as themeType;
    updateTheme(defaultTheme);
  }, []);

  return {
    ThemeProvider: themeContext.Provider,
    themeContext,
    initial: initialValue,
    value: theme,
  };
};

export default UseTheme;
