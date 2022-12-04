import { createContext } from "react";
import { NotesProps } from "../../@types/NotesProps";
import { PlannerProps } from "../../@types/PlannerProps";

export interface SelectedPlannerContextProps {
  SelectedPlanner?: PlannerProps | undefined
  setSelectedPlanner?: React.Dispatch<React.SetStateAction<PlannerProps | undefined>>
  SelectedPlannerNotes?: NotesProps | undefined
  setSelectedPlannerNotes?: React.Dispatch<React.SetStateAction<NotesProps | undefined>>
}

export const SelectedPlannerContext = createContext<SelectedPlannerContextProps>({});
