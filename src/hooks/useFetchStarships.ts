import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchStarships, fetchFilmsAndPilots } from "../redux/starshipSlice";

export const useFetchStarships = () => {
  const dispatch = useDispatch<AppDispatch>();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const nextPage = useSelector((state: RootState) => state.starship.nextPage);
  const loading = useSelector((state: RootState) => state.starship.loading);
  const films = useSelector((state: RootState) => state.starship.films);
  const pilots = useSelector((state: RootState) => state.starship.pilots);

  useEffect(() => {
    if (starships.length === 0) {
      dispatch(fetchStarships("https://swapi.py4e.com/api/starships/?page=1"));
    }
  }, [dispatch, starships.length]);

  const fetchNextPage = async () => {
    if (nextPage && !loading) {
      dispatch(fetchStarships(nextPage));
    }
  };

  const fetchFilmsAndPilotsData = async (films: string[], pilots: string[]) => {
    dispatch(fetchFilmsAndPilots({ films, pilots }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, fetchNextPage]);

  return {
    starships,
    nextPage,
    loading,
    fetchNextPage,
    films,
    pilots,
    fetchFilmsAndPilotsData,
  };
};
