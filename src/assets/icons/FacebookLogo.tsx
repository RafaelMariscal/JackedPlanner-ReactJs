import { SVGAttributes } from "react";

type FacebookLogoProps = SVGAttributes<HTMLOrSVGElement>

export function FacebookLogo(props: FacebookLogoProps) {
  return (
    <svg
      width={25}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 25.948c6.904 0 12.5-5.597 12.5-12.5 0-6.904-5.596-12.5-12.5-12.5S0 6.544 0 13.448c0 6.903 5.596 12.5 12.5 12.5Z"
        fill="#EEF4F6"
      />
      <path
        d="M13.795 4.785c-1.643 0-3.47.69-3.47 3.073.007.83 0 1.625 0 2.52H8.422v3.024h1.96v8.709h3.602v-8.766h2.377l.215-2.976h-2.655s.006-1.324 0-1.709c0-.941.98-.887 1.039-.887h1.605V4.785h-2.77Z"
        fill="#3B5998"
      />
    </svg>
  );
}
