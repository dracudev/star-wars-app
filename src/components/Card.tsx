import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="w-100 m-2 bg-gray-900 p-5 shadow-sm">{children}</div>;
}
