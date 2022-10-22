import { Slot } from '@radix-ui/react-slot'
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
        `w-full h-10 rounded-md text-sm font-medium border-2 border-transparent flex items-center gap-6 transition-all duration-150 hover:border-orange-500 ease-in-out`,
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
    <Slot className='ml-[18%]'>
      {children}
    </Slot>
  )
}

export const BrandButton = {
  Root: Root,
  Icon: Icon
}