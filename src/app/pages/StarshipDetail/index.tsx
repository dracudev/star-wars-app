import { useParams } from "react-router-dom";
import { CustomCard } from "../../../components/CustomCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function StarshipDetail() {
  const { id } = useParams<{ id: string }>();
  const starship = useSelector((state: RootState) =>
    state.starship.starships.find((starship) => starship.id === id),
  );

  if (!starship) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
        <p>Loading starship details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-items-start bg-[#0c0c0c] p-4">
      <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
        <h1>STARSHIP</h1>
      </div>

      <CustomCard imageSrc={starship.imageUrl}>
        <h1 className="mb-2 text-xl text-white">
          {starship.name.toUpperCase()}
        </h1>
        <p className="mb-8 text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda
          nisi eos placeat expedita. Cumque sequi accusamus quae rem tenetur
          aliquam necessitatibus. Debitis similique maiores perferendis id, rem
          ad sapiente.
        </p>
        <div className="flex-2 flex space-x-10 text-zinc-500 sm:space-x-20">
          <div className="flex flex-col gap-4">
            <p>Model: {starship.model}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Length: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
