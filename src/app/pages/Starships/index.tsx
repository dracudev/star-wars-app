import { CustomCard } from "../../../components/CustomCard";
import { useFetchStarships } from "../../../hooks/useFetchStarships";
import { useNavigateStarships } from "../../../hooks/useNavigateStarships";

export default function Starships() {
  const { starships, nextPage, loading, fetchNextPage } = useFetchStarships();
  const { handleCardClick } = useNavigateStarships();

  return (
    <div className="flex flex-col items-center justify-center bg-transparent px-4">
      {starships.length > 0 ? (
        <>
          {starships.map((starship) => (
            <CustomCard
              className="cursor-pointer"
              key={starship.id}
              onClick={() => handleCardClick(starship.id)}
              imageSrc={starship.imageUrl}
            >
              <h2 className="mb-2 text-xl sm:text-2xl">
                {starship.name.toUpperCase()}
              </h2>
              <h3 className="text-zinc-500 sm:text-lg">{starship.model}</h3>
            </CustomCard>
          ))}
          {nextPage && (
            <button onClick={fetchNextPage} disabled={loading}>
              {loading ? "Loading..." : "View More"}
            </button>
          )}
        </>
      ) : (
        <p className="flex min-h-screen flex-col items-center justify-center bg-transparent p-4">
          Loading starships...
        </p>
      )}
    </div>
  );
}
