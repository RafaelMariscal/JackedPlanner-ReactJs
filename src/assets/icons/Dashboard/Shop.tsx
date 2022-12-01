import { SVGAttributes } from "react";

type ShopIconProps = SVGAttributes<HTMLOrSVGElement>

export function ShopIcon(props: ShopIconProps) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.328 5.245h.38a5.312 5.312 0 0 1 10.57 0h.427c.467.007.775.042.985.223.26.225.821 2.161 1.129 3.317l-.288-1.082 2.189 8.04-.105-.348c.39 1.294.586 2.513.085 3.146-.277.35-.663.474-1.093.513H4.393c-.43-.04-.816-.162-1.093-.512-.387-.49-.359-1.33-.145-2.282l2.621-9.42c.219-.685.433-1.256.567-1.372.21-.181.518-.216.985-.223Zm5.667-3.877a4.31 4.31 0 0 1 4.289 3.877H8.706a4.31 4.31 0 0 1 4.289-3.877ZM10.12 9.122a.664.664 0 1 0 0-1.328.664.664 0 0 0 0 1.328Zm6.426-.664a.664.664 0 1 1-1.327 0 .664.664 0 0 1 1.327 0Z"
          fill="#EEF4F6"
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0}
          y={0.465}
          width={24}
          height={22.589}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_4032" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_4032"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
