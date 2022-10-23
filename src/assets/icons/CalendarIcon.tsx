import { SVGAttributes } from "react";

interface CalendarIconProps extends SVGAttributes<HTMLOrSVGElement> { }

export function CalendarIcon(props: CalendarIconProps) {
  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.2}
        d="M5 11.123h22v-5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5Z"
        fill="#000"
      />
      <path d="M5.842 11.123V5.77h20.44v5.352H5.841Z" fill="#D9D9D9" />
      <path
        d="M26 5.123H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 3.123v4M10 3.123v4M20.5 16.123l-5.838 5.5-3.162-3"
        stroke="#FE9016"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
} 