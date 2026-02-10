import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { iconsMap } from "../assets/iconsMap";
// import ThemeToggle from "./ThemeToggle";
import "./layout.css";

/*
  displays user context and global actions
*/
export default function Header({onMenuClick}: {onMenuClick: () => void}) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="empty-container" /> {/* Placeholder for potential left-aligned content */}
      {/* <ThemeToggle /> */}

      <button className="menu-btn" onClick={onMenuClick}>
        <img src={iconsMap.menu} alt="Menu" className="menu-icon" />
      </button>

      <div className="header-user">
        <img src={iconsMap.avatar} alt="User Avatar" className="avatar" />
        <p className="user-info">
          {user?.name}
          <span>{user?.email}</span>
        </p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
