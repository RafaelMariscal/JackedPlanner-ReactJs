import { useId, useState } from "react";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import DashboardCard from "../DashboardCard";
import { NotesForm } from "./NotesForm";

type Labels = ("BAD" | "OK" | "GOOD" | "GREAT")[];

interface PersonalNotesProps {
  history?: boolean
}

export function PersonalNotes({ history }: PersonalNotesProps) {
  const [Selected, setSelected] = useState("GREAT");
  const [Notes, setNotes] = useState("");
  const handleNotes = (notes: string) => setNotes(notes);

  const labels: Labels = ["BAD", "OK", "GOOD", "GREAT"];

  return (
    <DashboardCard title="Personal Notes:" extend className="min-w-[39rem]" classNameCard="overflow-y-auto">
      <NotesForm.Root>
        <div className="h-full flex flex-col gap-2">
          <NotesForm.Label label="Cardio" />
          <div className="flex gap-2">
            <NotesForm.Cardio distance={5} time={35} />

            <button className="h-9 rounded-lg w-fit px-2 bg-gray-100
              flex items-center cursor-pointer"
            >
              <EditIcon/>
            </button>
          </div>

          <NotesForm.Label label="Rate Workout" />
          <div className="flex gap-2">
            {labels.map(label => {
              return (
                <NotesForm.Rate key={useId()}
                  onClick={() => setSelected(label)}
                  selected={Selected}
                  rate={label}
                />
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <NotesForm.Label label="Notes" />
          <NotesForm.TextBox notes={Notes} SetNotes={handleNotes} history={history} />
        </div>
      </NotesForm.Root>
    </DashboardCard>
  );
}
