import { useNavigate } from "react-router-dom";

export const useNavigateStarships = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    navigate(`/starships/${id}`);
  };

  return { handleCardClick };
};
