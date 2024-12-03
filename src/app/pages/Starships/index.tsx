import { Card } from "../../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchStarships } from "../../../redux/starshipSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Starships() {
  const dispatch = useDispatch<AppDispatch>();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const nextPage = useSelector((state: RootState) => state.starship.nextPage);
  const loading = useSelector((state: RootState) => state.starship.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (starships.length === 0) {
      dispatch(fetchStarships("https://swapi.dev/api/starships/?page=1"));
    }
  }, [dispatch, starships.length]);

  const fetchNextPage = async () => {
    if (nextPage) {
      dispatch(fetchStarships(nextPage));
    }
  };

  const handleCardClick = (id: string) => {
    navigate(`/starships/${id}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0c0c] p-4">
      {starships.length > 0 ? (
        <>
          {starships.map((starship) => (
            <Card
              key={starship.url}
              onClick={() =>
                handleCardClick(starship.url.split("/").slice(-2, -1)[0])
              }
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
