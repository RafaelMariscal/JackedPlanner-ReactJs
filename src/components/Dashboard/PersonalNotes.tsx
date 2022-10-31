import { useId, useState } from "react";
import { Button } from "../LoginPage/Button";
import DashboardCard from "./DashboardCard";
import { NotesForm } from "./NotesForm";

type Labels = ("BAD" | "OK" | "GOOD" | "GREAT")[];

export function PersonalNotes() {
  const [Selected, setSelected] = useState('GREAT')
  const [Notes, setNotes] = useState('')
  const handleNotes = (notes: string) => setNotes(notes)

  const labels: Labels = ["BAD", "OK", "GOOD", "GREAT"]

  return (
    <DashboardCard title="Personal Notes:" className="w-full max-w-[746px]">
      <NotesForm.Root>
        <div className="h-full flex flex-col gap-2">
          <NotesForm.Label label="Cardio" />
          <NotesForm.Cardio distance={5} time={32} />

          <NotesForm.Label label="Rate Workout" />
          <div className="flex gap-2">
            {labels.map(label => {
              return (
                <NotesForm.Rate key={useId()}
                  onClick={() => setSelected(label)}
                  selected={Selected}
                  rate={label}
                />
              )
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <NotesForm.Label label="Notes" />
          <NotesForm.TextBox notes={Notes} setNotes={handleNotes} />
          <NotesForm.Button />
        </div>
      </NotesForm.Root>
    </DashboardCard>
  )
}
