import { ReactNode } from "react";
import { type FC } from "react";

interface CardProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mb-5 w-full max-w-4xl cursor-pointer bg-[#2b2b2b99] p-4 shadow-xl"
    >
      {children}
    </div>
  );
};
