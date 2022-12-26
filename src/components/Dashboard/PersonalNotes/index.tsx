import { isEqual } from "date-fns";
import { Timestamp } from "firebase/firestore";
import { FormEvent, useEffect, useId, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { RateProps } from "../../../@types/PlannerProps";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { useUserContext } from "../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../Pages/Dashboard";
import { updatePlannersCollection } from "../../../utils/updatePlannersCollection";
import DashboardCard from "../DashboardCard";
import { NotesForm } from "./NotesForm";

interface PersonalNotesProps {
  history?: boolean
}

const labels: RateProps[] = ["BAD", "OK", "GOOD", "GREAT"];

export function PersonalNotes({ history }: PersonalNotesProps) {
  const { UserLogged, Planners } = useUserContext();
  const {
    selectedSplit, setSelectedSplit,
    selectedSchedule, setSelectedSchedule,
  } = useOutletDataContext();

  const [rate, setRate] = useState<RateProps>("GREAT");
  const [trainingNotes, setTrainingNotes] = useState("");

  useEffect(() => {
    if (selectedSchedule) {
      const savedTrainingNotes = selectedSchedule.notes ? selectedSchedule.notes.trainingNotes : "";
      const savedRate: RateProps = selectedSchedule.notes ? selectedSchedule.notes.rate : "GREAT";
      setTrainingNotes(savedTrainingNotes);
      setRate(savedRate);
    }
  }, [selectedSplit]);

  async function updateCurrentNotesData() {
    if (selectedSchedule) {
      const newSchedule = { ...selectedSchedule };
      if (newSchedule.notes === null) return;
      newSchedule.notes.rate = rate;
      newSchedule.notes.trainingNotes = trainingNotes;
      setSelectedSchedule(newSchedule);
    }
  }

  async function handleSubmitNotes(event: FormEvent) {
    event.preventDefault();
    await updateCurrentNotesData();
    if (UserLogged && Planners) updatePlannersCollection(UserLogged, Planners);
    return;
  }

  return (
    <DashboardCard title="Personal Notes:" extend className="min-w-[39rem]" classNameCard="overflow-y-auto">
      <NotesForm.Root handleSubmitNotes={handleSubmitNotes}>
        <div className="h-full flex flex-col gap-2">
          <NotesForm.Label label="Cardio" />
          <div className="flex gap-2">
            <NotesForm.Cardio distance={5} time={35} />

            <button className="h-9 rounded-lg w-fit px-2 bg-gray-100
              flex items-center cursor-pointer"
            >
              <EditIcon />
            </button>
          </div>

          <NotesForm.Label label="Rate Workout" />
          <div className="flex gap-2">
            {labels.map(label => {
              return (
                <NotesForm.Rate
                  key={uuidV4()}
                  onClick={() => setRate(label)}
                  selected={rate}
                  rate={label}
                />
              );
            })}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <NotesForm.Label label="Notes" />
          <NotesForm.TextBox notes={trainingNotes} SetNotes={setTrainingNotes} history={history} />
        </div>
      </NotesForm.Root>
    </DashboardCard>
  );
}
