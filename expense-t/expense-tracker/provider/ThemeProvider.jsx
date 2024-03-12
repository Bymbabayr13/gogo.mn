import { createContext, useState } from "react";

export const Themecontext = createContext("light");

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(() => (theme == "light" ? "dark" : "light"));
  }
  console.log(children);
  return (
    <Themecontext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </Themecontext.Provider>
  );
}
