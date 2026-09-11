import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("portfolio-theme") ||
      "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    );

    document.documentElement.style.colorScheme = theme;

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}