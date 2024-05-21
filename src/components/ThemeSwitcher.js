import React, { useContext, useEffect } from 'react'
import { ThemeMode } from '../context/ThemeContext'

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useContext(ThemeMode);

    useEffect(() => {
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    }, [isDark]);

    const handleClick = () => {
        setIsDark(!isDark);
    }

  return (
    <div>
        <button className='darkmodeBtn' onClick={handleClick}>
            <p>darkmode</p>
        </button>
    </div>
  )
}