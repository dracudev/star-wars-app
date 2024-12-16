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
      {films.map((film, index) => (
        <div key={index}>
          <img src={film.filmImage} alt={film.title} />
          <p>{film.title}</p>
        </div>
      ))}
    </>
  );
}
