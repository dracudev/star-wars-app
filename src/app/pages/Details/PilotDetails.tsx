import { Starship } from "../../../types/types";

interface PilotDetailsProps {
  starship: Starship;
}

export default function PilotDetails({ starship }: PilotDetailsProps) {
  // Fetch pilots

  return (
    <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
      <h1>PILOTS</h1>
    </div>
  );
}
