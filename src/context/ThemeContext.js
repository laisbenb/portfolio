import { createContext, useState } from "react";

export const ThemeMode = createContext();

export const ThemeArea = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    return (
        <ThemeMode.Provider value={[isDark, setIsDark]}>
            {children}
        </ThemeMode.Provider>
    )
};