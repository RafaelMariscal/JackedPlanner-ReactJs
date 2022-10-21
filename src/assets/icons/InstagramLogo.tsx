import { SVGAttributes } from "react";

interface InstagramLogoProps extends SVGAttributes<HTMLOrSVGElement> { }

export function InstagramLogo(props: InstagramLogoProps) {
  return (
    <svg
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 13c0 7.18-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0s13 5.82 13 13ZM4 7.462A3.447 3.447 0 0 1 7.462 4h11.076A3.447 3.447 0 0 1 22 7.462v11.076A3.447 3.447 0 0 1 18.538 22H7.462A3.447 3.447 0 0 1 4 18.538V7.462Zm15.923-1.385h-3.077v3.077h3.077V6.077ZM13 9.847c-1 0-2 .538-2.539 1.307-.384.538-.615 1.154-.615 1.846 0 1.77 1.462 3.154 3.154 3.154s3.154-1.385 3.154-3.154c0-.692-.23-1.308-.615-1.846C15 10.384 14 9.846 13 9.846Zm5.538 10.384c.924 0 1.693-.77 1.693-1.693v-7.384h-2.693c.231.538.385 1.23.385 1.846 0 2.692-2.23 4.923-4.923 4.923-2.692 0-4.923-2.23-4.923-4.923 0-.615.154-1.308.385-1.846H5.769v7.384c0 .924.77 1.693 1.693 1.693h11.076Z"
        fill="#EEF4F6"
      />
    </svg>
  )
}
