import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className = "" }: ButtonProps) {
  return (
    <button className={`button ${className}`}>
      {children}
    </button>
  );
}