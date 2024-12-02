import { Card } from "../../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { addStarships } from "../../../redux/starshipSlice";
import { useState } from "react";

export default function Starships() {
  const dispatch = useDispatch();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const nextPage = useSelector((state: RootState) => state.starship.nextPage);
  const [loading, setLoading] = useState(false);

  const fetchNextPage = async () => {
    if (!nextPage) return;
    setLoading(true);
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      dispatch(addStarships({ starships: data.results, nextPage: data.next }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {starships.length > 0 ? (
        <>
          {starships.map((starship) => (
            <Card key={starship.name}>
              <h2>{starship.name}</h2>
              <h3>{starship.model}</h3>
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
    </>
  );
}
