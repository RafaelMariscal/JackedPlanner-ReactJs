import clsx from "clsx";
import { FormHTMLAttributes, LabelHTMLAttributes, ReactNode, useState } from "react";

interface NotesFormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
}

function Root({ className, children }: NotesFormRootProps) {
  return (
    <form onSubmit={(e => e.preventDefault())} className={clsx(
      'h-full flex justify-between gap-9 [&_span]:text-sm',
      className
    )}>
      {children}
    </form>
  )
}

interface NotesFormLabelProps {
  label: string;
}

function Label({ label }: NotesFormLabelProps) {
  return (
    <span className="text-gray-100 font-medium underline">
      {label}:
    </span>
  )
}

interface NotesFormCardioProps {
  distance: number;
  time: number;
}

function Cardio({ distance, time }: NotesFormCardioProps) {
  return (
    <div className="flex gap-2">
      <div className="h-9 rounded-lg w-fit px-3 bg-gray-100 flex items-center select-none">
        <span className="text-gray-800 font-semibold">
          {distance} km / {time} min
        </span>
      </div>

      <div className="
        h-9 rounded-lg w-fit px-2 bg-gray-100 
        flex items-center cursor-pointer
        "
      >
        <img src="/src/assets/icons/Dashboard/Edit.svg" alt=""
          className="w-[1.125rem]"
        />
      </div>
    </div>
  )
}

interface NotesFormRateProps extends LabelHTMLAttributes<HTMLLabelElement> {
  rate: 'BAD' | 'OK' | 'GOOD' | 'GREAT'
  selected?: string
}

function Rate({ rate, selected, ...props }: NotesFormRateProps) {
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
        className="hidden" defaultChecked={checked}
      />
    </label>
  )
}

interface NotesFormTextBoxProps {
  notes: string;
  setNotes: (notes: string) => void
}
function TextBox({ notes, setNotes }: NotesFormTextBoxProps) {
  return (
    <textarea onChange={() => setNotes(document.getElementsByName('Notes')[0].innerText)}
      className="h-full p-2 rounded-lg bg-gray-100 text-gray-800 text-sm"
      name="Notes" placeholder="Take your notes here!" value={notes}
    />
  )
}

interface NotesFormButtonProps {
}
function Button({ }: NotesFormButtonProps) {
  return (
    <button className="
      w-full py-2 rounded-lg text-sm
      bg-orange-500 text-gray-800 font-semibold
      
    "
    >
      Confirm Notes
    </button>
  )
}

export const NotesForm = {
  Root, Label, Cardio, Rate, TextBox, Button
}