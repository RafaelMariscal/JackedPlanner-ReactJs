import { useState } from "react";
import DashboardCard from "./DashboardCard";
import { NotesForm } from "./NotesForm";

type Labels = ("BAD" | "OK" | "GOOD" | "GREAT")[];

export function PersonalNotes() {
  const [Selected, setSelected] = useState('')

  const labels: Labels = ["BAD", "OK", "GOOD", "GREAT"]

  return (
    <DashboardCard title="Personal Notes:">
      <NotesForm.Root>
        <NotesForm.Label label="Cardio" />
        <div className="flex gap-2">
          <NotesForm.Cardio distance={5} time={32} />
          <NotesForm.Edit />
        </div>

        <NotesForm.Label label="Rate Workout" />
        <div className="flex gap-2">
          {
            labels.map(label => {
              return (
                <NotesForm.Rate onClick={() => setSelected(label)}
                  selected={Selected}
                  rate={label}
                />
              )
            })
          }
        </div>
      </NotesForm.Root>


    </DashboardCard>
  )
}
