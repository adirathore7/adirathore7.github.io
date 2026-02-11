import { NavLink, useLocation } from "react-router-dom";
import "./layout.css";
import {iconsMap} from "../assets/iconsMap";
import { baseUrl } from "../app/routes";
import { useEffect, useRef } from "react";

/*
 Sidebar navigation
*/

export default function Sidebar({open, onClose}: {open: boolean, onClose: () => void}) {

  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const activeLink = navRef.current?.querySelector(".nav-link.active") as HTMLElement | null;
    const indicator = indicatorRef.current as HTMLElement | null;

    if (navRef.current && activeLink && indicator) {
      // const { offsetTop, offsetHeight } = activeLink;
      // indicator.style.transform = `translateY(${offsetTop}px)`;
      // indicator.style.height = `${offsetHeight}px`;

      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();
      const top = activeRect.top - navRect.top;

      indicator.style.transform = `translateY(${top}px)`;
      indicator.style.height = `${activeRect.height}px`;
      
    }
  }, [location.pathname]);


  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <h1 className="gradient-text">Mock Banking Portal</h1>

      <nav ref={navRef} className="nav-container">
        <div className="active-indicator" ref={indicatorRef} />
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
