import { SVGAttributes } from "react";

type ArrowIconProps = SVGAttributes<HTMLOrSVGElement>

export function ArrowIcon(props: ArrowIconProps) {
  return (
    <svg
      width={24}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m2 11.807 10-10 10 10"
        stroke="#FE9016"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
