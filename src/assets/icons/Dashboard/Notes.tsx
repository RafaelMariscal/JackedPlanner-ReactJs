import { SVGAttributes } from "react";

type NotesIconProps = SVGAttributes<HTMLOrSVGElement>

export function NotesIcon(props: NotesIconProps) {
  return (
    <svg
      width={26}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)">
        <path
          d="M3 2.273C3 1.404 3.705.7 4.574.7h9.075c.869 0 1.573.704 1.573 1.573v.52c0 .869-.704 1.573-1.573 1.573H9.055c-.869 0-1.574.705-1.574 1.574v5.408c0 .87-.704 1.574-1.573 1.574H4.574c-.87 0-1.574-.705-1.574-1.574V2.273Z"
          fill="#FE9016"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.99 2.33a2.36 2.36 0 0 0-2.36 2.36v11.575a2.36 2.36 0 0 0 2.36 2.36h15.65a2.36 2.36 0 0 0 2.36-2.36V4.69a2.36 2.36 0 0 0-2.36-2.36H6.99Zm2.121 4.073a.407.407 0 0 0 0 .815H14a.407.407 0 0 0 0-.815H9.11Zm-.407 2.852c0-.225.182-.407.407-.407h11.407a.407.407 0 0 1 0 .815H9.111a.407.407 0 0 1-.407-.408Zm.407 1.222a.407.407 0 1 0 0 .815h11.407a.407.407 0 0 0 0-.815H9.111Zm-.407 2.037c0-.224.182-.407.407-.407h11.407a.407.407 0 0 1 0 .815H9.111a.407.407 0 0 1-.407-.408Zm.407 1.223a.407.407 0 1 0 0 .815h11.407a.407.407 0 0 0 0-.815H9.111Z"
          fill="#EEF4F6"
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0.639}
          y={0.7}
          width={25.147}
          height={21.073}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-0.787} dy={1.574} />
          <feGaussianBlur stdDeviation={0.787} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_4008" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_4008"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
