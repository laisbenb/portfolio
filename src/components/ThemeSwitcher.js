import React, { useContext, useEffect } from 'react'
import { ThemeMode } from '../context/ThemeContext'

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useContext(ThemeMode);

    useEffect(() => {
        isDark ? document.body.classList.add("light") : document.body.classList.remove("light");
    }, [isDark]);

    const handleClick = () => {
        setIsDark(!isDark);
    }

  return (
    <div>
        <button className='lightModeBtn' onClick={handleClick}>
            <img src={isDark ? './media/images/sun_icon.png' : './media/images/moon_icon.png' } alt={isDark ? 'sun' : 'moon' } />
        </button>
    </div>
  )
}