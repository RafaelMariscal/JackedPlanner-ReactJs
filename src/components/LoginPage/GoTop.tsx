import { AnchorHTMLAttributes } from "react";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";

type GoTopProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function GoTop(props: GoTopProps) {
  return (
    <a
      className="
      h-16 w-16 rounded-full bg-gray-800 select-none
      flex flex-col items-center justify-center
      border-2 border-orange-500 drop-shadow-[0_.0_.2rem_#FE9016]
      fixed right-4 bottom-4 cursor-pointer animate-[bounce_2s_infinite]
      hover:brightness-110 z-50
      "
      {...props}
    >
      <ArrowIcon />
      <span className="text-orange-500 font-semibold">
        Top
      </span>
    </a>
  );
}
