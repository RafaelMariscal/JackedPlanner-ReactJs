import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setInputValue: (a: string) => void;
}

export default function TextInput({ label, setInputValue, ...props }: TextInputProps) {
  return (
    <label
      htmlFor={label}
      className="w-full text-sm text-gray-100
      flex flex-col gap-1
      "
    >
      {label}

      <input
        id={label} {...props}
        value={props.value}
        onChange={(e) => setInputValue(e.target.value)}
        className="h-12 px-4 rounded-md
          font-medium border-2 border-transparent outline-none bg-gray-100
          text-gray-800 placeholder:text-gray-400 focus:border-orange-500
        "
      />
    </label>
  );
}

