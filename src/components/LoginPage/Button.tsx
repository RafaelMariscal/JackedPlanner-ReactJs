import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'orange' | 'light' | 'dark';
  size?: 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Button({ className, variant = 'orange', size = 'md', children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        `w-full rounded-md text-md font-semibold border-2 border-orange-500 transition-all duration-150 hover:brightness-95 ease-in-out`,
        {
          'bg-orange-500 text-gray-800': variant === 'orange',
          'bg-gray-100 text-gray-800': variant === 'light',
          'bg-gray-800 text-gray-100': variant === 'dark'
        },
        {
          'h-9': size === 'md',
          'h-12 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button >
  )
}
