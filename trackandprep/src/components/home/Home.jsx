import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar"; // ✅ Import Navbar
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <Navbar /> {/* ✅ Navbar added */}

            {/* Main Home Content */}
            <div className="home-container">
                <h2>Welcome to your future</h2>
                <p>Access your program and study plan</p>
                <div className="cards">
                    <div className="card">
                        <p>Study Plan - "Create & Track Your Study Plan"</p>
                        <button>Start</button>
                    </div>
                    <div className="card">
                        <p>Pomodoro Timer - "Boost Focus with Pomodoro"</p>
                        <button>Start</button>
                    </div>
                    <div className="card">
                        <p>Progress Tracker - "Track Your Performance with Insights"</p>
                        <button onClick={() => navigate("/progress-tracker")}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
