import clsx from "clsx";
import { FormEvent, useEffect, useState } from "react";
import { useOutletDataContext } from "../../../Pages/Dashboard";

export interface SetPlanProps {
  index: number
  und: "kg" | "body" | "plt" | undefined
  weight: number;
  exerciseIndex: number | undefined
  weightUsed?: number | "empty" | undefined
  liftedReps?: number | "empty" | undefined
}

export function SetPlan({ index, und, weight, exerciseIndex, weightUsed, liftedReps }: SetPlanProps) {
  const { exercisesNotes, setExercisesNotes } = useOutletDataContext();
  const [liftedWeightValue, setLiftedWeightValue] = useState<number | "empty">("empty");
  const [liftedRepsValue, setLiftedRepsValue] = useState<number | "empty">("empty");
  const [IsSetDone, setIsSetDone] = useState(false);

  useEffect(() => {
    weightUsed === "empty" ? setLiftedWeightValue("empty") : setLiftedWeightValue(Number(weightUsed));
    liftedReps === "empty" ? setLiftedRepsValue("empty") : setLiftedRepsValue(Number(liftedReps));
    if (weightUsed !== "empty" && liftedReps !== "empty") { setIsSetDone(true); }
  }, []);

  function handleInput(value: string, type: "weight" | "reps") {
    if (type === "weight") {
      return value === "" ? setLiftedWeightValue("empty")
        : setLiftedWeightValue(Number(value));
    } else {
      return value === "" ? setLiftedRepsValue("empty")
        : setLiftedRepsValue(Number(value));
    }
  }

  function handleButtonClick(event: FormEvent) {
    event.preventDefault();
    if (liftedRepsValue === 0 || liftedRepsValue === 0) {
      setLiftedWeightValue("empty");
      setLiftedRepsValue("empty");
      return;
    }

    if (exercisesNotes) {
      const newExerciseNotes = [...exercisesNotes];
      const selectedExerciseNotes = newExerciseNotes.find((note, i) => i === exerciseIndex);
      if (selectedExerciseNotes === undefined) return;

      const liftedWeightUpdated = selectedExerciseNotes.liftedWeight?.map((weight, i) => {
        if (i === index) return !IsSetDone ? liftedRepsValue : "empty";
        return weight;
      });
      const liftedRepsUpdated = selectedExerciseNotes.liftedReps?.map((rep, i) => {
        if (i === index) return !IsSetDone ? liftedRepsValue : "empty";
        return rep;
      });

      selectedExerciseNotes.liftedWeight = liftedWeightUpdated;
      selectedExerciseNotes.liftedReps = liftedRepsUpdated;
      setExercisesNotes(newExerciseNotes);
      setIsSetDone(!IsSetDone);
    }
  }

  return (
    <form className="flex flex-col gap-1 w-20" onSubmit={handleButtonClick}>
      <div className={clsx(
        "font-semibold text-sm text-gray-800 flex flex-col [&_*]:h-9 [&_*]:flex [&_*]:items-center [&_*]:justify-center [&_:nth-child(2)]:bg-gray-100 [&_input]:text-center",
        {
          "[&_:nth-child(1)]:bg-cyan-500": IsSetDone === true,
          "[&_:nth-child(1)]:bg-orange-500": IsSetDone === false,
          "[&_*]:bg-gray-100 [&_*]:border-transparent": IsSetDone === true,
          "[&_*]:bg-transparent [&_input]:border-orange-500 [&_input]:text-gray-100 [&_input]:font-normal": IsSetDone === false,
        }

      )}>
        <span className="rounded-t-md">Set {index + 1}</span>
        <span>{und === "body" ? null : weight} {und}</span>
        <input type="number" min={0} placeholder={`W8 ${und}`} disabled={IsSetDone} required
          className="border border-t-0" value={liftedWeightValue} onChange={(e) => handleInput(e.target.value, "weight")}
        />
        <input type="number" min={0} placeholder="Reps" disabled={IsSetDone} required
          className="border rounded-b-md" value={liftedRepsValue} onChange={(e) => handleInput(e.target.value, "reps")}
        />
      </div>
      <button className={clsx(
        "w-full h-8 rounded-md text-gray-800 font-semibold flex items-center justify-center",
        {
          "bg-cyan-500": IsSetDone === true,
          "bg-gray-100": IsSetDone === false,
        }
      )}
      >
        {IsSetDone ? "Done" : "To Do"}
      </button>
    </form >
  );
}
