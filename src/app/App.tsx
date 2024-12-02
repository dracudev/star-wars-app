import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchStarships } from "../redux/starshipSlice";
import { AppDispatch } from "../redux/store";
import Navbar from "../components/Navbar";
import Starships from "./pages/Starships/index";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStarships("https://swapi.dev/api/starships/?page=1"));
  }, [dispatch]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="flex items-center justify-center">
        <Starships />
      </section>
    </>
  );
}

export default App;
