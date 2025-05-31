import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="button">
      <span className="shadow"></span>
      <span className="edge"></span>
      {children}
    </button>
  );
}