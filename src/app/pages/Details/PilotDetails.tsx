import { TinyCard } from "../../../components/TinyCard";
import { StarshipState } from "../../../types/types";

interface PilotDetailsProps {
  pilots: StarshipState["pilots"];
}

export default function PilotDetails({ pilots }: PilotDetailsProps) {
  if (!pilots || pilots.length === 0) {
    return (
      <>
        <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
          <h1>PILOTS</h1>
        </div>
        <p className="mb-3">No existing pilots for this starship</p>
      </>
    );
  }

  return (
    <>
      <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
        <h1>PILOTS</h1>
      </div>
      <div className="grid w-full max-w-5xl auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pilots.map((pilot, index) => (
          <TinyCard key={index} imageSrc={pilot.pilotImage}>
            <h1 className="text-center text-xl">{pilot.name.toUpperCase()}</h1>
          </TinyCard>
        ))}
      </div>
    </>
  );
}
