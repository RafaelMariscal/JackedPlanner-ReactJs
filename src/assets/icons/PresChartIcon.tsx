import { SVGAttributes } from "react";

interface PresChartIconProps extends SVGAttributes<HTMLOrSVGElement> { }

export function PresChartIcon(props: PresChartIconProps) {
  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m20 23.123 4 5M12 23.123l-4 5M16 6.123v-3"
        stroke="#FE9016"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 6.123H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1Z"
        fill="#EEF4F6"
      />
      <path
        d="M27 6.123H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1Z"
        stroke="#EEF4F6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.252v3M14 14.252v5M18 12.252v7M22 9.994v9.258"
        stroke="#343C3F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
} 