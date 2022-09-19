import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styles
import "./App.css";

//pages
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />

                        <Route path="/create" element={<Create />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/signup" element={<Signup />} />

                        <Route path="/project/:id" element={<Project />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
