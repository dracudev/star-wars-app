import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchStarships } from "../../../hooks/useFetchStarships";
import { StarshipDetails } from "./StarshipDetail";
import PilotDetails from "./PilotDetails";
import FilmDetails from "./FilmDetails";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const { starships, films, pilots, fetchFilmsAndPilotsData } =
    useFetchStarships();
  const starship = starships.find((starship) => starship.id === id);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (starship && !dataFetched) {
      fetchFilmsAndPilotsData(starship.films, starship.pilots);
      setDataFetched(true);
    }
  }, [starship, fetchFilmsAndPilotsData, dataFetched]);

  if (!starship) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-transparent">
        <p>Loading starship details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-items-center bg-transparent">
      <StarshipDetails starship={starship} />
      <PilotDetails pilots={pilots} />
      <FilmDetails films={films} />
    </div>
  );
}
