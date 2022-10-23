import { SVGAttributes } from "react";

interface NotesPencilIconProps extends SVGAttributes<HTMLOrSVGElement> { }

export function NotesPencilIcon(props: NotesPencilIconProps) {
  return (
    <svg
      width={32}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m23.925 4.6-2.431 2.346 3.595 3.51 2.396-2.363-3.56-3.492Z"
        fill="#FE9016"
      />
      <path
        d="M16 20.123h-4v-4l12-12 4 4-12 12ZM21 7.123l4 4"
        stroke="#EEF4F6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 15.123v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-20a1 1 0 0 1 1-1h11"
        stroke="#EEF4F6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
} 