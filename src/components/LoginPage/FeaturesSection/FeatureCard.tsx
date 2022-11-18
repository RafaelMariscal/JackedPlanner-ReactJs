import { clsx } from "clsx";
import { ReactNode } from "react";

export interface FeatureCardRootProps {
  children: ReactNode;
  className?: string;
}
function Root({ children, className, ...props }: FeatureCardRootProps) {
  return (
    <div
      className={clsx(
        "w-16 h-16 p-4 max-w-fit overflow-hidden bg-gray-800 drop-shadow-[.5rem_.5rem_0_#FE9016] flex items-center justify-start gap-3 animate-return hover:animate-strech",
        className
      )}
      {...props}
    >
      {children}
    </div >
  );
}

export interface FeatureCardIconProps {
  children: ReactNode
}

function Icon({ children }: FeatureCardIconProps) {
  return (
    <p className="
      w-8 h-8
      flex items-center
    "
    >
      {children}
    </p>
  );
}

export interface FeatureCardLabelProps {
  children: ReactNode
}

function Label({ children }: FeatureCardIconProps) {
  return (
    <p className="
      font-medium text-lg text-gray-100
      whitespace-nowrap ml-2
    "
    >
      {children}
    </p>
  );
}

export const FeatureCard = {
  Root: Root,
  Icon: Icon,
  Label: Label
};
