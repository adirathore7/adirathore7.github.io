import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import "./layout.css";

/*
  displays user context and global actions
*/
export default function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div /> {/* Placeholder for potential left-aligned content */}

      <div className="header-user">
        <span>{user?.name}</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
