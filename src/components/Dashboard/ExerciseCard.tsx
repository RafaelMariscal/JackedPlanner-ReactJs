import { ReactNode } from "react";
import { clsx } from 'clsx'

interface ExerciseCardRootProps {
  done?: boolean;
  className?: string
  children: ReactNode
}

function Root({ done = false, className, children }: ExerciseCardRootProps) {
  return (
    <div className={clsx(
      'flex items-center gap-2 font-semibold text-gray-800 select-none',
      '[&>div]:h-9 [&>div]:flex [&>div]:items-center [&>div]:rounded-lg',
      '[&>span]:text-gray-100 [&>span]:text-xs [&>span]:block [&>span]:h-6',
      {
        '[&_div]:bg-cyan-500': done === true,
        '[&_div]:bg-gray-100': done == false
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
    <div className="flex-col justify-start gap-4  py-2">
      <span className="self-start mx-[.875rem] leading-tight">
        {name}
      </span>
      <div className={clsx(
        "top-10 w-full h-fit px-[.875rem] py-1 text-sm flex flex-col justify-start rounded-lg",
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

function Description() {
  return (
    <div className="w-9 justify-center">
      <img src="/src/assets/icons/Dashboard/Description.svg" alt=""
        className="w-4"
      />
    </div>
  )
}


export const ExerciseCard = {
  Root, Index, Name, Sets, Reps, Description
}