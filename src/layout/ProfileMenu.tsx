import { useEffect, useRef, useState } from "react";
import { iconsMap } from "../assets/iconsMap";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../app/routes";


export default function ProfileMenu({onLogout}: {onLogout: () => void}) {

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleMenu = () => setOpen((prev) => !prev);

    // used for closing menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const onProfileClick = ({editable}: {editable: boolean}) => {
        navigate(`${baseUrl}/profile?editable=${editable}`);
        setOpen(false);
    }

    const handleLogout = () => {
        onLogout();
        setOpen(false);
    }

    return (
        <div className="profile-menu-container" ref={menuRef}>
            <button className="profile-btn" onClick={toggleMenu}>
                <img src={iconsMap.avatar} alt="User Avatar" className="avatar" />
            </button>

            {open && (
                <div className="profile-menu">
                    <button onClick={() => onProfileClick({editable: false})} className="profile-menu-item">Profile</button>
                    <button onClick={() => onProfileClick({editable: true})} className="profile-menu-item">Settings</button>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
            )}
        </div>
    );
}