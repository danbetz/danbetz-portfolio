import { ReactNode } from "react";

type ButtonlinkProps = {
  children: ReactNode;
  className?: string;
};

export function ButtonLink({ children, className = "" }: ButtonlinkProps) {
  return (
    <div className={`text-link ${className}`}>
      <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
     </span>
     <span className="button-text">{children}</span>
    </div>
  );
}