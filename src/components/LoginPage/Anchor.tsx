import { AnchorHTMLAttributes, ReactNode } from "react";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function Anchor(props: AnchorProps) {
  return (
    <a
      className={`
        text-gray-100
        font-medium
        [&>span]:text-orange-500
        transition-all
        duration-150
        hover:text-cyan-500
      +   ${props.className}`
      }
      {...props}
    >
      {props.children}
    </a>
  )
}
