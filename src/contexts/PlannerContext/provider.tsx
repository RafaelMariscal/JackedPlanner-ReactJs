import { ReactNode, useState } from "react";
import { SelectedPlannerContext } from ".";
import { NotesProps } from "../../@types/NotesProps";
import { PlannerProps } from "../../@types/PlannerProps";

interface ProviederProps {
  children: ReactNode;
}

export const SelectedPlannerProvider = ({ children }: ProviederProps) => {
  const [SelectedPlanner, setSelectedPlanner] = useState<PlannerProps>();
  const [SelectedPlannerNotes, setSelectedPlannerNotes] = useState<NotesProps>();

  return (
    <SelectedPlannerContext.Provider value={{
      SelectedPlanner,
      setSelectedPlanner,
      SelectedPlannerNotes,
      setSelectedPlannerNotes
    }}>
      {children}
    </SelectedPlannerContext.Provider>
  );
};
