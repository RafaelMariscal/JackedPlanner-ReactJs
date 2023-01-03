import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { PlannerProps } from "../../../../@types/PlannerProps";

interface SplitNameInputProps {
  planner: PlannerProps | undefined
  label: string
}
export function SplitNameInput({ planner, label }: SplitNameInputProps) {
  const [SplitName, setSplitName] = useState<string>(() => {
    if (planner) {
      const split = planner.splits.find(split => split.splitLabel === label);
      return split !== undefined ? split.splitTitle : "";
    } else {
      return "";
    }
  });

  return (
    <label
      key={uuidV4()}
      htmlFor={`split${label}`}
    >
      <span className="ml-1">
        Name for split
        <span className="text-orange-500 font-medium">
          {` "${label}" `}
        </span>
        :
      </span>
      <input type="text" name="SpltX" id="SpltX"
        placeholder="Split name..." className="pl-4"
        value={SplitName} onChange={(e) => setSplitName(e.target.value)}
        required
      />
    </label>
  );
}
