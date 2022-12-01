import { SVGAttributes } from "react";

type ConfigIconProps = SVGAttributes<HTMLOrSVGElement>

export function ConfigIcon(props: ConfigIconProps) {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m24.34 11.913-2.454.694a7.928 7.928 0 0 1-1.196 2.919l1.246 2.23a.897.897 0 0 1-1.221 1.221l-2.228-1.245a7.928 7.928 0 0 1-2.924 1.201l-.699 2.468a.897.897 0 0 1-1.727 0l-.705-2.491a7.928 7.928 0 0 1-2.863-1.217l-2.273 1.27a.897.897 0 0 1-1.221-1.221l1.288-2.306a7.925 7.925 0 0 1-1.131-2.802l-2.572-.728a.897.897 0 0 1 0-1.726l2.598-.736a7.927 7.927 0 0 1 1.147-2.736l-1.324-2.37a.897.897 0 0 1 1.22-1.22l2.373 1.326a7.927 7.927 0 0 1 2.733-1.141l.735-2.596a.897.897 0 0 1 1.727 0l.729 2.574c1.014.199 1.96.59 2.798 1.135l2.31-1.291a.898.898 0 0 1 1.22 1.221l-1.273 2.28a7.93 7.93 0 0 1 1.21 2.86l2.477.7a.897.897 0 0 1 0 1.727Zm-16.056-.81a5.773 5.773 0 1 1 11.545 0 5.773 5.773 0 0 1-11.545 0Z"
          fill="#EEF4F6"
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0.674}
          y={0.054}
          width={25.096}
          height={25.109}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-0.777} dy={1.555} />
          <feGaussianBlur stdDeviation={0.777} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_4048" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_4048"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
