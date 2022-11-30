import { SVGAttributes } from "react";

type DescriptionIconProps = SVGAttributes<HTMLOrSVGElement>

export function DescriptionIcon(props: DescriptionIconProps) {
  return (
    <svg
      width={198}
      height={234}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M144 224.884H18a9 9 0 0 1-9-9v-162a9 9 0 0 1 9-9h90l45 45v126a8.998 8.998 0 0 1-9 9Z"
        stroke="#343C3F"
        strokeWidth={17.339}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 44.884v-27a9 9 0 0 1 9-9h90l45 45v126a8.998 8.998 0 0 1-9 9h-27M54 143.884h54M54 179.884h54"
        stroke="#343C3F"
        strokeWidth={17.339}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
