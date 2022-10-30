import { ReactNode } from "react";
import { clsx } from 'clsx'

interface ExerciseCardRootProps {
  selected?: boolean;
  showDescription?: boolean;
  done?: boolean;
  className?: string
  children: ReactNode
}

function Root({ selected = false, showDescription = false, done = false, className, children }: ExerciseCardRootProps) {
  return (
    <div className={clsx(
      'flex items-center gap-2 font-semibold text-gray-800 select-none',
      '[&>div]:h-9 [&>div]:flex [&>div]:items-center [&>div]:rounded-lg',
      '[&>div]:border-2 [&>div]:border-transparent',
      '[&>span]:text-gray-100 [&>span]:text-xs [&>span]:block [&>span]:h-6',
      {
        '[&>div]:border-orange-500': selected === true,
        '[&_#description]:bg-orange-500': showDescription === true,
        '[&_div]:bg-cyan-500': done === true,
        '[&_div]:bg-gray-100': done === false,
      },
      className
    )}
    >
      {children}
    </div>
  )
}

interface ExerciseCardIndexProps {
  index: number;
}

function Index({ index }: ExerciseCardIndexProps) {
  return (
    <div className="w-9 justify-center">
      <span>{index}</span>
    </div>
  )
}

interface ExerciseCardNameProps {
  name: string;
  description?: string;
  showDescription?: boolean
}

function Name({ name, description, showDescription = false }: ExerciseCardNameProps) {
  return (
    <div className="flex-col justify-start gap-2">
      <span className="self-start py-[.375rem] mx-[.875rem] leading-tight">
        {name}
      </span>
      <div className={clsx(
        "z-10 w-full h-fit px-[.875rem] py-1 text-sm flex flex-col justify-start rounded-lg",
        {
          'hidden': showDescription === false
        }
      )}
      >
        <span className="block mb-1 underline">Description:</span>
        <p>{description}</p>
      </div>
    </div >
  )
}

interface ExerciseCardSetsProps {
  sets: number;
}

function Sets({ sets }: ExerciseCardSetsProps) {
  return (
    <div className="w-9 justify-center">
      <span>{sets}</span>
    </div>
  )
}

interface ExerciseCardRepsProps {
  reps: number;
}

function Reps({ reps }: ExerciseCardRepsProps) {
  return (
    <div className="w-9 justify-center">
      <span>{reps}</span>
    </div>
  )
}

interface ExerciseCardDescriptionProps {
  selected?: boolean
}

function Description({ selected = false }: ExerciseCardDescriptionProps) {
  return (
    <div id="description" className={clsx(
      "w-9 justify-center",

    )}>
      <img src="/src/assets/icons/Dashboard/Description.svg" alt=""
        className="w-4"
      />
    </div>
  )
}

/* 
        [ ] TO DO CARD
        [ ] EDIT CARD
*/





export const ExerciseCard = {
  Root, Index, Name, Sets, Reps, Description
}