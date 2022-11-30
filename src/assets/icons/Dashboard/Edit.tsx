import { SVGAttributes } from "react";

type EditIconProps = SVGAttributes<HTMLOrSVGElement>

export function EditIcon(props: EditIconProps) {
  return (
    <svg
      width={180}
      height={180}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)" fill="#343C3F">
        <path d="M12.307 13.38h90.452v12.445H12.515v141.011h141.604V77.409h12.892v89.427c0 2.858-.954 6.463-3.669 9.237-2.784 2.845-5.496 3.863-9.431 3.863H12.515c-2.915 0-5.922-1.261-8.452-3.863-2.438-2.508-3.608-6.058-3.608-8.197V25.826c0-3.414.812-5.737 3.123-8.33 2.508-2.814 5.42-4.115 8.73-4.115Z" />
        <path d="m44.544 134.84 9.732-30.061c-.144-2.091.13-6.813 2.379-8.975.53-.51.53-1.077.53-1.317 4.967 4.298 11.649 11.365 13.858 13.854 2.488 2.209 9.556 8.891 13.854 13.858-.24 0-.807 0-1.317.53-2.162 2.249-6.884 2.523-8.975 2.379l-30.061 9.732ZM94.238 112.128 67.23 85.122l63.015-62.1 26.701 26.702-62.71 62.404ZM166.864 39.807 139.73 12.672s5.477-5.45 8.977-8.95c1.802-1.802 4.605-3.403 8.029-3.54 3.768-.15 6.985 1.54 8.984 3.54l11.52 11.52c1.568 1.568 2.118 4.094 2.155 6.927.039 2.958-.531 5.638-2.155 7.262l-10.376 10.376Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h180v180H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
