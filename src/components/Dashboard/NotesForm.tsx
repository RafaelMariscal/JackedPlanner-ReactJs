import clsx from "clsx";
import { LabelHTMLAttributes, ReactNode, useState } from "react";

interface NotesCardProps {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: NotesCardProps) {
  return (
    <form className={clsx(
      'flex flex-col gap-2 [&_span]:text-sm',
      className
    )}>
      {children}
    </form>
  )
}

interface LabelProps {
  label: string;
}

function Label({ label }: LabelProps) {
  return (
    <span className="text-gray-100 font-medium underline">
      {label}:
    </span>
  )
}

interface CardioProps {
  distance: number;
  time: number;
}

function Cardio({ distance, time }: CardioProps) {
  return (
    <div className="h-9 rounded-lg w-fit px-3 bg-gray-100 flex items-center select-none">
      <span className="text-gray-800 font-semibold">
        {distance} km / {time} min
      </span>
    </div>
  )
}

function Edit() {
  return (
    <div className="
      h-9 rounded-lg w-fit px-2 bg-gray-100 
      flex items-center cursor-pointer
      "
    >
      <img src="/src/assets/icons/Dashboard/Edit.svg" alt=""
        className="w-[1.125rem]"
      />
    </div>
  )
}

interface RateProps extends LabelHTMLAttributes<HTMLLabelElement> {
  rate: 'BAD' | 'OK' | 'GOOD' | 'GREAT'
  selected?: string
}

function Rate({ rate, selected, ...props }: RateProps) {
  const checked = rate === selected
  return (
    <label
      className={clsx(
        "select-none h-9 rounded-lg w-16 px-2 flex items-center justify-center cursor-pointer text-gray-800 text-sm font-semibold",
        {
          'bg-cyan-500': checked === true,
          'bg-gray-100': checked === false,
        }
      )}
      htmlFor={rate}
      {...props}
    >
      {rate}
      <input type="radio" id={rate} name="WorkoutRate" value={rate}
        className="hidden" checked={checked}
      />

    </label>
  )
}

export const NotesForm = {
  Root, Label, Cardio, Edit, Rate
}