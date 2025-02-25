import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Logging out...");
        navigate("/login"); // Redirect back to login page
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page!</h1>
            <p>This is the main dashboard after login.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
