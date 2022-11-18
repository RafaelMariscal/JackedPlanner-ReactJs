import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  variant?: "orange" | "light" | "dark";
  size?: "md" | "lg" | "custom";
  login?: boolean
  href?: string;
  className?: string;
  onClick?: () => void
  children: ReactNode;
}

export function Button({ login = false, className, href, variant = "orange", size = "md", children, }: ButtonProps) {
  const Comp = login ? Slot : "a";

  return (
    <Comp href={href}
      className={clsx(
        `w-full rounded-md border-2 border-orange-500 cursor-pointer
        font-semibold flex items-center justify-center select-none
        transition-all duration-150 hover:brightness-95 ease-in-out`,
        {
          "bg-orange-500 text-gray-800": variant === "orange",
          "bg-gray-100 text-gray-800": variant === "light",
          "bg-gray-800 text-gray-100 hover:drop-shadow-[0_0_.25rem_#FE9016]": variant === "dark",
          "h-9": size === "md",
          "h-12": size === "lg",
          "h-10 text-sm": size === "custom",
          "text-lg hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-orange-500": login === true,
        },
        className
      )}
    >
      {children}
    </ Comp>
  );
}
