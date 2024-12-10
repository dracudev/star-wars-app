import "./App.css";
import Navbar from "../components/Navbar";
import Starships from "./pages/Starships/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail";
import { Footer } from "../components/Footer";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<StarshipDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
