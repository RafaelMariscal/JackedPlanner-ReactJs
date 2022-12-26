import clsx from "clsx";
import { FormEvent, FormHTMLAttributes, LabelHTMLAttributes, ReactNode, useState } from "react";
import { CardioProps, RateProps } from "../../../@types/PlannerProps";

interface NotesFormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: ReactNode;
  handleSubmitNotes: (event: FormEvent) => void
}

function Root({ className, children, handleSubmitNotes }: NotesFormRootProps) {
  return (
    <form onSubmit={handleSubmitNotes} className={clsx(
      "h-full flex justify-between gap-9 [&_span]:text-sm",
      className
    )}>
      {children}
    </form>
  );
}

interface NotesFormLabelProps {
  label: string;
}

function Label({ label }: NotesFormLabelProps) {
  return (
    <span className="text-gray-100 font-medium underline">
      {label}:
    </span>
  );
}

interface NotesFormCardioProps {
  distance: number;
  time: number;
  done: boolean;
  index: number;
  setCardios: React.Dispatch<React.SetStateAction<CardioProps[]>>
}

function Cardio({ distance, time, done, index, setCardios }: NotesFormCardioProps) {
  function handleCardioClick() {
    return setCardios(prev => {
      return prev.map((cardio, j) => {
        if (index === j) {
          const newCardio: CardioProps = { ...cardio, done: !done };
          return newCardio;
        }
        return cardio;
      });
    });
  }

  return (
    <button
      type="button"
      onClick={handleCardioClick}
      className={clsx(
        "h-9 rounded-lg w-fit px-3 flex items-center select-none",
        {
          "bg-gray-100": done === false,
          "bg-cyan-500": done === true,
        }

      )}>
      <span className="text-gray-800 font-semibold">
        {distance} km / {time} min
      </span>
    </button>
  );
}

interface NotesFormRateProps extends LabelHTMLAttributes<HTMLLabelElement> {
  rate: RateProps
  selected?: string
}

function Rate({ rate, selected, ...props }: NotesFormRateProps) {
  const checked = rate === selected;
  return (
    <label
      className={clsx(
        "select-none h-9 rounded-lg w-16 px-2 flex items-center justify-center cursor-pointer text-gray-800 text-sm font-semibold",
        {
          "bg-cyan-500": checked === true,
          "bg-gray-100": checked === false,
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
  );
}

interface NotesFormTextBoxProps {
  notes: string;
  SetNotes: (notes: string) => void
  isLoading: boolean
  history?: boolean;
}
function TextBox({ notes, SetNotes, history, isLoading }: NotesFormTextBoxProps) {
  const [IsUserEditing, setIsUserEditing] = useState(history === undefined ? true : false);

  function handleClick() {
    if (history === undefined) {
      return;
    } else {
      setIsUserEditing(!IsUserEditing);
    }
  }

  return (
    <div className="w-full h-fit">
      <textarea onChange={(e) => { SetNotes(e.target.value); }}
        className={clsx(
          "h-full w-full p-2 rounded-lg text-gray-800 text-sm",
          {
            "bg-cyan-500": IsUserEditing === false,
            "bg-gray-100": IsUserEditing === true,
          }
        )}
        name="Notes" placeholder="Take your notes here!" value={notes} disabled={!IsUserEditing}
      />
      <button
        disabled={isLoading}
        onClick={handleClick}
        className={clsx(
          "w-full py-2 rounded-lg border-2 text-sm text-gray-800 font-semibold",
          {
            "bg-gray-100 border-orange-500": IsUserEditing === false,
            "bg-orange-500 border-transparent": IsUserEditing === true,
          }
        )}
      >
        {IsUserEditing ? "Confirm Notes" : "Edit Notes"}
      </button>
    </div>
  );
}

export const NotesForm = {
  Root, Label, Cardio, Rate, TextBox
};
