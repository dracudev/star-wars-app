import { useNavigate } from "react-router-dom";

export const useNavigateStarships = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/starships/${id}`);
  };

  return { handleCardClick };
};
