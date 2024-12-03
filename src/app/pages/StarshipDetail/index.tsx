import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import imagen from "../../../assets/img.jpg";

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
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
        <p>Loading starship details...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-items-start bg-[#0c0c0c] p-4">
      <Card imageSrc={imagen}>
        <h1 className="mb-2 text-3xl font-bold text-white">{starship.name}</h1>
        <p className="mb-8 font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda
          nisi eos placeat expedita. Cumque sequi accusamus quae rem tenetur
          aliquam necessitatibus. Debitis similique maiores perferendis id, rem
          ad sapiente.
        </p>
        <div className="flex-2 flex items-center justify-center space-x-9">
          <div className="flex flex-col gap-4">
            <p>Model: {starship.model}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Length: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
