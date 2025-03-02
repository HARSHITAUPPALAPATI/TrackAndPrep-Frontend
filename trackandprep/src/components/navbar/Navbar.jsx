import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="profile-pic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-YtsDEkK0KG_8qlwL__iOAdj5FimDcr9GQ&s" alt="Profile" />
            </div>
            <div className="nav-icons">
                <FaHome className="icon" onClick={() => navigate("/")} />
                <FaCalendarAlt className="icon" onClick={() => navigate("/calendar")} />
                <FaPaperPlane className="icon" onClick={() => navigate("/progress-tracker")} />
            </div>
        </div>
    );
};

export default Navbar;
