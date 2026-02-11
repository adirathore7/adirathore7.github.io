import { NavLink } from "react-router-dom";
import "./layout.css";
import {iconsMap} from "../assets/iconsMap";
import { baseUrl } from "../app/routes";

/*
 Sidebar navigation
*/

export default function Sidebar({open, onClose}: {open: boolean, onClose: () => void}) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <h1 className="gradient-text">Mock Banking Portal</h1>

      <nav>
        <NavLink to={`${baseUrl}/dashboard`} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={onClose}>
          <img src={iconsMap.home} alt="Home" className="nav-icons" />Home
        </NavLink>

        <NavLink to={`${baseUrl}/accounts`} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={onClose}>
          <img src={iconsMap.account} alt="Accounts" className="nav-icons" />Accounts
        </NavLink>

        <NavLink to={`${baseUrl}/payments`} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={onClose}>
          <img src={iconsMap.payment} alt="Payments" className="nav-icons" />Payments
        </NavLink>

        <NavLink to={`${baseUrl}/activity-log`} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={onClose}>
          <img src={iconsMap.log} alt="Activity Log" className="nav-icons" />Activity Log
        </NavLink>
      </nav>
    </aside>
  );
}
