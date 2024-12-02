import { ReactNode } from "react";
import { type FC } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="mb-5 w-full max-w-4xl bg-[#2b2b2b99] p-4 shadow-xl">
      {children}
    </div>
  );
};
