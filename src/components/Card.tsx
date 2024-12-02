import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="m-2 bg-[#2b2b2b99] p-5 shadow-xl">{children}</div>;
}
