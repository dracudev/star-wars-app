import { TinyCard } from "../../../components/TinyCard";
import { StarshipState } from "../../../types/types";

interface FilmDetailsProps {
  films: StarshipState["films"];
}

export default function FilmDetails({ films }: FilmDetailsProps) {
  if (!films || films.length === 0) {
    return (
      <>
        <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
          <h1>FILMS</h1>
        </div>
        <p>No existing films for this starship</p>
      </>
    );
  }

  return (
    <>
      <div className="mb-4 w-full max-w-5xl border-y-2 border-solid border-y-zinc-600 p-3">
        <h1>FILMS</h1>
      </div>
      <div className="grid w-full max-w-5xl auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {films.map((film, index) => (
          <TinyCard key={index} imageSrc={film.filmImage}>
            <h1 className="text-center text-xl">{film.title.toUpperCase()}</h1>
            <p className="pt-2 text-center text-zinc-500">
              Movie {film.episode}
            </p>
          </TinyCard>
        ))}
      </div>
    </>
  );
}
