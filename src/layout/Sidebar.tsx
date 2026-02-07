import { NavLink } from "react-router-dom";
import "./layout.css";
import {iconsMap} from "../assets/iconsMap";

/*
 Sidebar navigation
*/

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="gradient-text">Mock Banking Portal</h1>

      <nav>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          <img src={iconsMap.home} alt="Home" className="nav-icons" />Home
        </NavLink>

        <NavLink to="/accounts" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          <img src={iconsMap.account} alt="Accounts" className="nav-icons" />Accounts
        </NavLink>

        <NavLink to="/payments" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          <img src={iconsMap.payment} alt="Payments" className="nav-icons" />Payments
        </NavLink>

        <NavLink to="/activity-log" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          <img src={iconsMap.log} alt="Activity Log" className="nav-icons" />Activity Log
        </NavLink>
      </nav>
    </aside>
  );
}
