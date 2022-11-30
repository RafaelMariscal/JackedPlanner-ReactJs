import { SVGAttributes } from "react";

type DescriptionIconProps = SVGAttributes<HTMLOrSVGElement>

export function DescriptionIcon(props: DescriptionIconProps) {
  return (
    <svg
      width={17}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 19H1.75a.75.75 0 0 1-.75-.75V4.75A.75.75 0 0 1 1.75 4h7.5L13 7.75v10.5a.75.75 0 0 1-.75.75Z"
        stroke="#343C3F"
        strokeWidth={1.438}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4V1.75A.75.75 0 0 1 4.75 1h7.5L16 4.75v10.5a.75.75 0 0 1-.75.75H13M4.75 12.25h4.5M4.75 15.25h4.5"
        stroke="#343C3F"
        strokeWidth={1.438}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
