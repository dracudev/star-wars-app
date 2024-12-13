import { useParams } from "react-router-dom";

import { useFetchStarships } from "../../../hooks/useFetchStarships";
import { StarshipDetails } from "./StarshipDetail";
import PilotDetails from "./PilotDetails";
import FilmDetails from "./FilmDetails";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const { starships } = useFetchStarships();
  const starship = starships.find((starship) => starship.id === id);

  if (!starship) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-transparent p-4">
        <p>Loading starship details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-items-start bg-transparent p-4">
      <StarshipDetails starship={starship} />
      <PilotDetails starship={starship} />
      <FilmDetails starship={starship} />
    </div>
  );
}
