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
        <button className='darkModeBtn' onClick={handleClick}>
            <img src={isDark ? './media/images/moon_icon.png' : './media/images/sun_icon.png' } alt={isDark ? 'moon' : 'sun' } />
        </button>
    </div>
  )
}