import { SVGAttributes } from "react";

interface AppleLogoProps extends SVGAttributes<HTMLOrSVGElement> { }

export function AppleLogo(props: AppleLogoProps) {
  return (
    <svg
      width={21}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.245 3.124C12.887.959 15.17.948 15.17.948s.34 2.036-1.292 3.997c-1.743 2.093-3.723 1.75-3.723 1.75s-.372-1.646 1.089-3.571Zm-.88 4.997c.845 0 2.413-1.161 4.454-1.161 3.514 0 4.897 2.5 4.897 2.5s-2.704 1.382-2.704 4.736c0 3.784 3.368 5.088 3.368 5.088s-2.354 6.627-5.534 6.627c-1.46 0-2.596-.985-4.135-.985-1.569 0-3.125 1.021-4.139 1.021C3.67 25.947 0 19.662 0 14.61c0-4.972 3.105-7.58 6.018-7.58 1.893 0 3.362 1.092 4.347 1.092Z"
        fill="#fff"
      />
    </svg>
  )
} 