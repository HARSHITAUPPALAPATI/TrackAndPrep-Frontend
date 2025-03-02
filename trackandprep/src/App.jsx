import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import ProgressTracker from "./components/progresstracker/ProgressTracker"; // ✅ Correct path


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/progress-tracker" element={<ProgressTracker />} /> {/* ✅ New Route */}
            </Routes>
        </Router>
    );
};

export default App;
