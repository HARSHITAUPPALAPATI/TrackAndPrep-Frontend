import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Navbar from "../navbar/Navbar"; // ✅ Import Navbar
import "./ProgressTracker.css";

const ProgressTracker = () => {
    const [progress] = useState({
        daily: 30, 
        weekly: 70,
        monthly: 50,
    });

    // Data for Pie Chart
    const pieData = [
        { name: "Completed", value: progress.monthly, color: "#82CA9D" },
        { name: "Remaining", value: 100 - progress.monthly, color: "#8884D8" },
    ];

    return (
        <div className="progress-page">
            <Navbar /> {/* ✅ Navbar is now a separate component */}

            {/* Main Content */}
            <div className="progress-container">
                <h2>Progress Tracker</h2>

                <div className="content-wrapper">
                    {/* Progress Bars */}
                    <div className="progress-section">
                        <div className="progress-card">
                            <p>Daily Goals</p>
                            <div className="progress-bar">
                                <div className="progress-fill daily" style={{ width: `${progress.daily}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-card">
                            <p>Weekly Goals</p>
                            <div className="progress-bar">
                                <div className="progress-fill weekly" style={{ width: `${progress.weekly}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-card">
                            <p>Monthly Goals</p>
                            <div className="progress-bar">
                                <div className="progress-fill monthly" style={{ width: `${progress.monthly}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="pie-chart-section">
                        <PieChart width={400} height={400}>
                            <Pie data={pieData} cx="50%" cy="50%" outerRadius={120} dataKey="value" label>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
