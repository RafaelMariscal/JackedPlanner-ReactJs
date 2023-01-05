import { v4 as uuidV4 } from "uuid";
import { PlannerProps } from "../../../../@types/PlannerProps";
import { ArrowIcon } from "../../../../assets/icons/ArrowIcon";
import { scheduleLabels, SplitInfoProps } from "./ModalForm";

interface SplitsInputsControllersProps {
  planner: PlannerProps | undefined
  splitsQuantity: number
  setSplitsQuantity: (qty: number) => void
  restsQuantity: number
  setRestsQuantity: (qty: number) => void
  setSplitsInfo: React.Dispatch<React.SetStateAction<SplitInfoProps[]>>
  plannerDuration: number
  setPlannerDuration: React.Dispatch<React.SetStateAction<number>>
}

export function SplitsInputsControllers({
  planner, splitsQuantity, setSplitsQuantity, restsQuantity, setRestsQuantity,
  plannerDuration, setPlannerDuration, setSplitsInfo
}: SplitsInputsControllersProps) {

  function handleQuantity(state: "split" | "rest" | "duration", action: "acc" | "dec") {
    if (state === "split") {
      let updatedState = splitsQuantity;
      action === "acc" ? updatedState += 1 : updatedState -= 1;
      const min = 1;
      const max = 10;
      const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));
      setSplitsQuantity(validatedValue);

      if (action === "dec" && splitsQuantity > min) {
        setSplitsInfo(prev => prev.filter((split, i) => i !== prev.length - 1));
      }

      if (action === "acc" && splitsQuantity < max) {
        setSplitsInfo(prev => {
          const label = scheduleLabels[validatedValue - 1];
          const split = planner?.splits.find(split => split.splitLabel === label);
          const newSplit: SplitInfoProps = {
            id: uuidV4(), label, splitTitle: split ? split.splitTitle : ""
          };
          return [...prev, newSplit];
        });
      }
      return;
    }
    if (state === "rest") {
      let updatedState = restsQuantity;
      action === "acc" ? updatedState += 1 : updatedState -= 1;
      const min = 0;
      const max = 10;
      const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));
      return setRestsQuantity(validatedValue);
    }
  }

  function handleSplitsQuantity(action: "acc" | "dec") {
    const min = 1;
    const max = 10;
    let updatedState = splitsQuantity;
    action === "acc" ? updatedState += 1 : updatedState -= 1;
    const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));
    setSplitsQuantity(validatedValue);
    if (action === "dec" && splitsQuantity > min) {
      setSplitsInfo(prev => prev.filter((split, i) => i !== prev.length - 1));
    }
    if (action === "acc" && splitsQuantity < max) {
      setSplitsInfo(prev => {
        const label = scheduleLabels[validatedValue - 1];
        const split = planner?.splits.find(split => split.splitLabel === label);
        const newSplit: SplitInfoProps = {
          id: uuidV4(), label, splitTitle: split ? split.splitTitle : ""
        };
        return [...prev, newSplit];
      });
    }
  }

  function handleRestDaysQuantity(action: "acc" | "dec") {
    const min = 0;
    const max = 10;
    let updatedState = splitsQuantity;
    action === "acc" ? updatedState += 1 : updatedState -= 1;
    const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));
    return setRestsQuantity(validatedValue);
  }

  function handleDurationQuantity(value: string, button = false, action?: "add" | "dec") {
    const min = 30;
    const max = 360;
    if (button) {
      setPlannerDuration(prev => {
        const updatedValue = action === "add" ? prev += 10 : prev -= 10;
        return Math.max(min, Math.min(max, Number(updatedValue)));
      });
    }
    if (value) {
      const updatedValue = Math.max(min, Math.min(max, Number(value)));
      setPlannerDuration(updatedValue);
    }
  }

  return (
    <div>
      <div className="flex gap-3 items-end">
        <div className="flex flex-col text-sm gap-1 text-gray-100 text-center">
          <span>Qty of <span className="text-orange-500 font-medium">Splits</span> :</span>
          <div className="bg-gray-100 h-10 rounded-lg flex items-center justify-center relative">
            <span className="text-gray-800 font-semibold">
              {splitsQuantity}
            </span>
            <div className="flex flex-col absolute right-1">
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={() => handleSplitsQuantity("acc")}
              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50" />
              </button>
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={() => handleSplitsQuantity("dec")}
              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50 rotate-180" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm gap-1 text-gray-100 text-center">
          <span><span className="text-orange-500 font-medium">Rest Days</span> :</span>
          <div className="bg-gray-100 h-10 rounded-lg flex items-center justify-center relative">
            <span className="text-gray-800 font-semibold">{restsQuantity}</span>
            <div className="flex flex-col absolute right-1">
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={() => handleRestDaysQuantity("acc")}
              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50" />
              </button>
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={() => handleRestDaysQuantity("dec")}
              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50 rotate-180" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm gap-1 text-gray-100 text-center w-fit">
          <span><span className="text-orange-500 font-medium">Duration</span> :</span>
          <div className="bg-gray-100 h-10 w-fit rounded-lg flex items-center justify-between relative">
            <input
              type="number"
              className="w-20 text-gray-800 text-center pr-1"
              inputMode="numeric"
              pattern="\d*"
              value={plannerDuration}
              onChange={(e) => handleDurationQuantity(e.target.value, false)}

            />
            <div className="flex flex-col absolute right-1">
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={(e) => handleDurationQuantity(e.currentTarget.value, true, "add")}
              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50" />
              </button>
              <button
                type="button"
                className="[&_path]:hover:stroke-orange-500"
                onClick={(e) => handleDurationQuantity(e.currentTarget.value, true, "dec")}              >
                <ArrowIcon className="[&_path]:stroke-gray-800 scale-50 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
