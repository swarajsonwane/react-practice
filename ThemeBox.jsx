import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // ✅ named import

const ThemeBox = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // ✅ should now work

    return (
        <div style={{
            padding: "1rem",
            background: theme === 'dark' ? "#222" : "#eee",
            color: theme === 'dark' ? "#fff" : "#000"
        }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeBox;
