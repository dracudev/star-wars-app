import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { addStarships } from "../redux/starshipSlice";

import Navbar from "../components/Navbar";
import Starships from "./pages/Starships/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialStarships = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/?page=1");
        const data = await response.json();
        dispatch(
          addStarships({ starships: data.results, nextPage: data.next }),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchInitialStarships();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Starships />
    </>
  );
}

export default App;
