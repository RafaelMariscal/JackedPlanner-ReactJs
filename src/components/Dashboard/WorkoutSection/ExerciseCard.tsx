import { ReactNode } from "react";
import { clsx } from "clsx";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { DescriptionIcon } from "../../../assets/icons/Dashboard/Description";

interface ExerciseCardRootProps {
  selected: boolean;
  done: boolean;
  className?: string
  children: ReactNode
}

function Root({ selected = false, done = false, className, children }: ExerciseCardRootProps) {
  return (
    <div className={clsx(
      "flex items-center gap-2 font-semibold text-gray-800 select-none",
      "[&>div]:h-9 [&>div]:flex [&>div]:items-center [&>div]:rounded-lg",
      "[&>div]:border-2 [&>div]:border-transparent",
      "[&>span]:text-gray-100 [&_span]:text-sm [&>span]:block [&>span]:h-6",
      {
        "[&>div]:border-orange-500": selected === true,
        "[&_div]:bg-cyan-500": done === true,
      },
      className
    )}
    >
      {children}
    </div >
  );
}

interface ExerciseCardIndexProps {
  index: number;
}

function Index({ index }: ExerciseCardIndexProps) {
  return (
    <div className="w-9 justify-center bg-gray-100">
      <span>{index}</span>
    </div>
  );
}

interface ExerciseCardNameProps {
  name: string;
}

function Name({ name, }: ExerciseCardNameProps) {
  return (
    <div className="flex-1 bg-gray-100 relative">
      <span className="mx-[.875rem] truncate block w-full">
        {name}
      </span>
    </div >
  );
}

interface ExerciseCardSetsProps {
  sets: number;
}

function Sets({ sets }: ExerciseCardSetsProps) {
  return (
    <div className="w-9 justify-center bg-gray-100">
      <span>{sets}</span>
    </div>
  );
}

interface ExerciseCardRepsProps {
  reps: number;
}

function Reps({ reps }: ExerciseCardRepsProps) {
  return (
    <div className="w-9 justify-center bg-gray-100">
      <span>{reps}</span>
    </div>
  );
}

interface ExerciseCardDescriptionCardProps {
  showDescription: boolean
}

function DescriptionCard({ showDescription }: ExerciseCardDescriptionCardProps) {

  return (
    <div className={clsx(
      "w-9 h-9 flex rounded-lg justify-center items-center cursor-pointer bg-gray-100",
      {
        "bg-orange-500": showDescription === true
      }
    )}
    >
      <DescriptionIcon/>
    </div >
  );
}

interface ExerciseCardDescriptionProps {
  done: boolean
  description: string
}

function Description({ done = false, description }: ExerciseCardDescriptionProps) {
  return (
    <div className={clsx(
      "static px-[.875rem] py-1 mr-1 text-sm flex flex-col justify-start rounded-lg bg-gray-100 border-2 border-orange-500",
      {
        "bg-cyan-500": done === true
      }
    )}
    >
      <span className="mb-1 underline">Description:</span>
      <p className="max-w-xs">{description}</p>
    </div>
  );
}

interface ExerciseCardTodoProps {
  done?: boolean
}

function Todo({ done = false }: ExerciseCardTodoProps) {
  return (
    <div className={clsx(
      "w-16 justify-center",
      {
        "bg-gray-100": done === false
      }
    )}>
      <span>
        {done ? "Done" : "To Do"}
      </span>
    </div>
  );
}

function Edit() {
  return (
    <div className="w-9 justify-center bg-gray-100 cursor-pointer">
      <EditIcon/>
    </div>
  );
}

export const ExerciseCard = {
  Root, Index, Name, Sets, Reps, DescriptionCard, Description, Todo, Edit
};
