import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StarshipDetail() {
  const { id } = useParams<{ id: string }>();
  const [starship, setStarship] = useState<any>(null);

  useEffect(() => {
    const fetchStarship = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
      const data = await response.json();
      setStarship(data);
    };

    fetchStarship();
  }, [id]);

  if (!starship) {
    return <p className="text-white">Loading starship details...</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
      <div className="mb-5 w-full max-w-4xl bg-[#2b2b2b99] p-4 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-white">{starship.name}</h1>
        <p className="text-white">Model: {starship.model}</p>
        <p className="text-white">Manufacturer: {starship.manufacturer}</p>
        <p className="text-white">
          Cost in Credits: {starship.cost_in_credits}
        </p>
        <p className="text-white">Length: {starship.length}</p>
        <p className="text-white">
          Max Atmosphering Speed: {starship.max_atmosphering_speed}
        </p>
        <p className="text-white">Crew: {starship.crew}</p>
        <p className="text-white">Passengers: {starship.passengers}</p>
        <p className="text-white">Cargo Capacity: {starship.cargo_capacity}</p>
        <p className="text-white">Consumables: {starship.consumables}</p>
        <p className="text-white">
          Hyperdrive Rating: {starship.hyperdrive_rating}
        </p>
        <p className="text-white">MGLT: {starship.MGLT}</p>
        <p className="text-white">Starship Class: {starship.starship_class}</p>
      </div>
    </div>
  );
}
