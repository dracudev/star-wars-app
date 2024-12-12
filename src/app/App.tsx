import "./App.css";
import Navbar from "../components/Navbar";
import Starships from "./pages/Starships/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail";
import { Footer } from "../components/Footer";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "../components/utils/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function App() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-grow items-center justify-center bg-[url('./assets/bg.webp')] py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              element={
                <ProtectedRoute
                  canActivate={user.isAuthenticated}
                  redirectPath="/login"
                />
              }
            >
              <Route path="/starships" element={<Starships />} />
              <Route path="/starships/:id" element={<StarshipDetail />} />
            </Route>
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
