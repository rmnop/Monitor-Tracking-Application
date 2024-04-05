import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"
import Dashboard from "./pages/Dashboard"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    </React.StrictMode>
)