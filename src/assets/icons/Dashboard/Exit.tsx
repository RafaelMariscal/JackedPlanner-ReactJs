import { SVGAttributes } from "react";

type ExitIconProps = SVGAttributes<HTMLOrSVGElement>

export function ExitIcon(props: ExitIconProps) {
  return (
    <svg
      width={25}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#a)">
        <rect
          x={3}
          y={0.054}
          width={12.857}
          height={22.456}
          rx={2.246}
          fill="#FE9016"
        />
      </g>
      <g filter="url(#b)">
        <path
          d="m17.406 14.486 2.933-2.889H9.454c-.358 0-.74-.353-.74-.73 0-.33.31-.706.717-.706h10.908l-2.933-2.89c-.286-.282-.27-.72 0-1.012.296-.318.86-.259 1.122 0l3.936 3.878s.536.508.536.742c0 .232-.536.718-.536.718l-3.936 3.878c-.382.377-.764.4-1.146.047-.285-.264-.286-.73.024-1.036Z"
          fill="#EEF4F6"
        />
        <path
          d="M22.543 10.058v-.001h-.001L18.607 6.18a.95.95 0 0 0-.623-.25.848.848 0 0 0-.66.253c-.307.331-.331.839.003 1.169l2.738 2.697H9.431a.818.818 0 0 0-.592.264.83.83 0 0 0-.237.554c0 .226.114.436.27.587.156.151.368.255.582.255h10.611l-2.738 2.697c-.35.346-.358.886-.02 1.199.205.19.423.29.654.28.228-.011.444-.13.646-.33l3.934-3.876.005-.005.018-.016a3.673 3.673 0 0 0 .252-.258c.069-.077.14-.165.195-.25a.54.54 0 0 0 .101-.271.558.558 0 0 0-.1-.274 2.215 2.215 0 0 0-.195-.258 4.298 4.298 0 0 0-.252-.268l-.017-.017-.005-.004Z"
          stroke="#EEF4F6"
          strokeWidth={0.225}
        />
      </g>
      <defs>
        <filter
          id="a"
          x={0.754}
          y={0.054}
          width={15.851}
          height={25.45}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-0.749} dy={1.497} />
          <feGaussianBlur stdDeviation={0.749} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_4060" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_4060"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          x={6.993}
          y={4.321}
          width={17.729}
          height={13.174}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={0.749} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_4060" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_4060"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
