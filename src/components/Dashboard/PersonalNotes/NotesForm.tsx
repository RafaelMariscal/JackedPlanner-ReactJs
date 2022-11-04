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
    <div className="h-9 rounded-lg w-fit px-3 bg-gray-100 flex items-center select-none">
      <span className="text-gray-800 font-semibold">
        {distance} km / {time} min
      </span>
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
  history?: boolean;
  SetNotes: (notes: string) => void
}
function TextBox({ notes, history, SetNotes }: NotesFormTextBoxProps) {

  const [IsUserEditing, setIsUserEditing] = useState(false)
  function handleClick() {
    setIsUserEditing(!IsUserEditing)
    history = !IsUserEditing
  }

  return (
    <div className="w-full pb-6">
      <textarea onChange={(e) => { SetNotes(e.target.value) }}
        className={clsx(
          "h-full w-full p-2 rounded-lg text-gray-800 text-sm",
          {
            'bg-cyan-500': IsUserEditing === false,
            'bg-gray-100': IsUserEditing === true,
          }
        )}
        name="Notes" placeholder="Take your notes here!" value={notes} disabled={!IsUserEditing}
      />
      <button onClick={handleClick} className={clsx(
        "w-full py-2 rounded-lg border-2 text-sm text-gray-800 font-semibold",
        {
          'bg-gray-100 border-orange-500': IsUserEditing === false,
          'bg-orange-500 border-transparent': IsUserEditing === true,
        }
      )}
      >
        {IsUserEditing ? 'Confirm Notes' : 'Edit Notes'}
      </button>
    </div>
  )
}

export const NotesForm = {
  Root, Label, Cardio, Rate, TextBox
}