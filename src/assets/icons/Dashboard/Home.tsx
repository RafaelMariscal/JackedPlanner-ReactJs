import { SVGAttributes } from "react";

type HomeIconProps = SVGAttributes<HTMLOrSVGElement>

export function HomeIcon(props: HomeIconProps) {
  return (
    <svg
      width={24}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)" fill="#EEF4F6">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.445.615c.12.074.23.146.323.211l1.757 1.32 3.378 2.538.309.245c1.042.827 1.767 1.402 2.37 2.35.336.528.404 1.474.418 1.789v9.515c-.006.217-.056 1.282-.42 1.853-.672 1.057-1.44 1.262-2.948 1.262H23v.002h-5.05c-.82-.005-1.245-.128-1.618-.714-.192-.3-.23-.841-.237-1.016v-4.699h-6.19v4.643s-.008.71-.238 1.072c-.373.586-.798.71-1.62.714H3V5.985h.074L3 6.018v3.154s.014-1.254.42-1.892c.604-.948 1.33-1.524 2.372-2.35l.37-.295-.025.01L8.05 3.109l2.356-1.895.024-.02-.009.011c.096-.076.189-.152.28-.227l.09-.073.219-.177c.522-.41 1.041-.732 1.806-.727.446.003.971.234 1.408.483l.221.132ZM23 5.985v.031l-.07-.03H23ZM10.738 21.7h4.522-4.522ZM3 21.698h3.37c-1.51 0-2.277-.205-2.95-1.262-.406-.638-.42-1.892-.42-1.892v3.154Z"
        />
        <path d="M9.902 17.056v-1.795h2.725c-.72 0-1.752.117-2.142.511-.39.394-.583.784-.583 1.284ZM16.155 17.056v-1.795H13.43c.72 0 1.751.117 2.141.511.39.394.584.784.584 1.284Z" />
      </g>
      <defs>
        <filter
          id="a"
          x={0}
          y={0}
          width={24}
          height={25.7}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_3992" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_3992"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
