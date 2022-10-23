import { SVGAttributes } from "react";

interface CardsIconProps extends SVGAttributes<HTMLOrSVGElement> { }

export function CardsIcon(props: CardsIconProps) {
  return (
    <svg
      width={30}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M20 9.123H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1Z"
        fill="#EEF4F6"
      />
      <path
        d="M20 9.123H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5.123h19a1 1 0 0 1 1 1v15"
        stroke="#FE9016"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1.123h19a1 1 0 0 1 1 1v15"
        stroke="#D9D9D9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
} 