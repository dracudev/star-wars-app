import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStarships } from "../redux/starshipSlice";

export const useFetchStarships = () => {
  const dispatch = useDispatch<AppDispatch>();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const nextPage = useSelector((state: RootState) => state.starship.nextPage);
  const loading = useSelector((state: RootState) => state.starship.loading);

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

  return { starships, nextPage, loading, fetchNextPage };
};
