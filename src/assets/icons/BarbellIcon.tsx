import { SVGAttributes } from "react";

type BarbellIconProps = SVGAttributes<HTMLOrSVGElement>

export function BarbellIcon(props: BarbellIconProps) {
  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 16.123h8M29 16.123h2M1 16.123h2"
        stroke="#FE9016"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.123H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1ZM24 7.123h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1Z"
        fill="#000"
        fillOpacity={0.2}
      />
      <path d="M25 10.123h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3" fill="#2A3032" />
      <path
        d="M25 10.123h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 22.123H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h3" fill="#2A3032" />
      <path
        d="M7 22.123H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h3M11 7.123H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1ZM24 7.123h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
