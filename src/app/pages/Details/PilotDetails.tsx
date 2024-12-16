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
        <p>No existing pilots for this starship</p>
      </>
    );
  }

  return (
    <>
      <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
        <h1>PILOTS</h1>
      </div>
      {pilots.map((pilot, index) => (
        <div key={index}>
          <img src={pilot.pilotImage} alt={pilot.name} />
          <p>{pilot.name}</p>
        </div>
      ))}
    </>
  );
}
