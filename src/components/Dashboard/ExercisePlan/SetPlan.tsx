import clsx from "clsx";
import { FormEvent, useState } from "react";

export interface SetPlanProps {
  index: number
  und: 'kg' | 'lbs' | 'pl';
  weight: number;
  used?: string;
  reps?: string;
  done?: boolean;
}

export function SetPlan({ index, und, weight, used, reps, done = false }: SetPlanProps) {
  const [IsSetDone, setIsSetDone] = useState(false)
  done = IsSetDone
  function handleButtonClick(event: FormEvent) {
    event.preventDefault()
    setIsSetDone(!IsSetDone)
  }
  return (
    <form className="flex flex-col gap-1 w-20" onSubmit={handleButtonClick}>
      <div className={clsx(
        "font-semibold text-sm text-gray-800 flex flex-col [&_*]:h-9 [&_*]:flex [&_*]:items-center [&_*]:justify-center [&_:nth-child(2)]:bg-gray-100 [&_input]:text-center",
        {
          '[&_:nth-child(1)]:bg-cyan-500': IsSetDone === true,
          '[&_:nth-child(1)]:bg-orange-500': IsSetDone === false,
          '[&_*]:bg-gray-100 [&_*]:border-transparent': IsSetDone === true,
          '[&_*]:bg-transparent [&_input]:border-orange-500 [&_input]:text-gray-100 [&_input]:font-normal': IsSetDone === false,
        }

      )}>
        <span className="rounded-t-md">Set{index}</span>
        <span>{weight} {und}</span>
        <input type="number" min={0} placeholder={`W8 ${und}`} disabled={IsSetDone} required
          className="border border-t-0"
        />
        <input type="number" min={0} placeholder="Reps" disabled={IsSetDone} required
          className="border rounded-b-md"
        />
      </div>
      <button className={clsx(
        "w-full h-8 rounded-md text-gray-800 font-semibold flex items-center justify-center",
        {
          'bg-cyan-500': IsSetDone === true,
          'bg-gray-100': IsSetDone === false,
        }
      )}
      >
        {IsSetDone ? "Done" : "To Do"}
      </button>
    </form >
  )
}
