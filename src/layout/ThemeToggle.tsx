import { useTheme } from "../hooks/useTheme";
import './layout.css';

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? 'Dark' : 'Light'}
        </button>
    );
}