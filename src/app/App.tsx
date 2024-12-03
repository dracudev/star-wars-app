import "./App.css";
import Navbar from "../components/Navbar";
import Starships from "./pages/Starships/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
