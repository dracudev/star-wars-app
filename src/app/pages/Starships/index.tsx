import { Card } from "../../../components/Card";
import { useFetchStarships } from "../../../hooks/useFetchStarships";
import { useNavigateStarships } from "../../../hooks/useNavigateStarships";

export default function Starships() {
  const { starships, nextPage, loading, fetchNextPage } = useFetchStarships();
  const { handleCardClick } = useNavigateStarships();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
      {starships.length > 0 ? (
        <>
          {starships.map((starship) => (
            <Card
              className="cursor-pointer"
              key={starship.id}
              onClick={() => handleCardClick(starship.id)}
              imageSrc={starship.imageUrl}
            >
              <h2 className="mb-2 text-xl font-medium">{starship.name}</h2>
              <h3 className="font-thin">{starship.model}</h3>
            </Card>
          ))}
          {nextPage && (
            <button onClick={fetchNextPage} disabled={loading}>
              {loading ? "Loading..." : "View More"}
            </button>
          )}
        </>
      ) : (
        <p>Loading starships...</p>
      )}
    </div>
  );
}
