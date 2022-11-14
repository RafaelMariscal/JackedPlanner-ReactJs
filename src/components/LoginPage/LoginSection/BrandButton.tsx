import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BrandButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'Apple' | 'Facebook' | 'Github' | 'Google';
  children: ReactNode;
}

function Root({ children, variant, ...props }: BrandButtonRootProps) {
  return (
    <button type='button'
      className={clsx(
        "w-full h-10 rounded-md text-sm font-medium border-2",
        "border-transparent flex items-center gap-6 select-none",
        "transition-all duration-150 ease-in-out outline-none",
        "hover:scale-[105%] focus:outline-orange-500",
        "active:scale-[103%] active:transition-none",
        {
          'bg-black text-gray-100': variant === 'Apple',
          'bg-blue text-gray-100': variant === 'Facebook',
          'bg-gray-github text-gray-100': variant === 'Github',
          'bg-gray-100 text-gray-800 font-semibold': variant === 'Google',
        }
      )}
      {...props}
    >
      {children}
      Sign in with {variant}
    </button >
  )
}

export interface BrandButtonIconProps {
  children: ReactNode
}

function Icon({ children }: BrandButtonIconProps) {
  return (
    <div className='ml-[18%]'>
      {children}
    </div>
  )
}

export const BrandButton = {
  Root, Icon
}