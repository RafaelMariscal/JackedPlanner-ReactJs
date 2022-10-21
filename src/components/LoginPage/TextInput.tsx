import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function TextInput(props: TextInputProps) {
  return (
    <label htmlFor={props.label} className='
      w-full
      text-sm
      text-gray-100
      flex
      flex-col
      gap-1'
    >
      {props.label}

      <input id={props.label} {...props} className='
      h-12
      px-4
      rounded-md
      font-medium
      border-2
      border-transparent
      outline-none
      bg-gray-100
      text-gray-800
      placeholder:text-gray-400
      focus:border-orange-500
      '
      />
    </label>
  )
}

