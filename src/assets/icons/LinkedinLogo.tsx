import { SVGAttributes } from "react";

type LinkedinLogoProps = SVGAttributes<HTMLOrSVGElement>

export function LinkedinLogo(props: LinkedinLogoProps) {
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
        d="M26.5 13.448c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13ZM5 6.166c0-.673.563-1.218 1.256-1.218h14.488c.694 0 1.256.545 1.256 1.218V20.73c0 .673-.563 1.218-1.256 1.218H6.256C5.563 21.948 5 21.403 5 20.73V6.166Zm5.166 5.355v7.653H7.622v-7.653h2.544Zm.168-2.367c0 .735-.552 1.322-1.44 1.322h-.016c-.854 0-1.406-.587-1.406-1.322 0-.751.569-1.322 1.44-1.322.87 0 1.405.571 1.422 1.322Zm3.784 10.02h-2.544s.034-6.935 0-7.653h2.544v1.084c.338-.522.944-1.263 2.293-1.263 1.673 0 2.928 1.094 2.928 3.444v4.388h-2.543v-4.093c0-1.03-.369-1.731-1.289-1.731-.703 0-1.121.473-1.305.93-.068.164-.084.393-.084.621v4.273Z"
        fill="#EEF4F6"
      />
    </svg>
  );
}
