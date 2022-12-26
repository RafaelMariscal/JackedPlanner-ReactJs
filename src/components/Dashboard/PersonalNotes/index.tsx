import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { CardioProps, RateProps } from "../../../@types/PlannerProps";
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
  const { selectedSplit, selectedSchedule, setSelectedSchedule, } = useOutletDataContext();

  const [cardios, setCardios] = useState<CardioProps[]>([]);
  const [rate, setRate] = useState<RateProps>("GREAT");
  const [trainingNotes, setTrainingNotes] = useState("");

  useEffect(() => {
    if (selectedSchedule) {
      const savedCardios: CardioProps[] = selectedSchedule.notes ? selectedSchedule.notes.cardio : [];
      const savedRate: RateProps = selectedSchedule.notes ? selectedSchedule.notes.rate : "GREAT";
      const savedTrainingNotes = selectedSchedule.notes ? selectedSchedule.notes.trainingNotes : "";
      setCardios(savedCardios);
      setTrainingNotes(savedTrainingNotes);
      setRate(savedRate);
    }
  }, [selectedSplit]);

  async function updateCurrentNotesData() {
    if (selectedSchedule) {
      const newSchedule = { ...selectedSchedule };
      if (newSchedule.notes === null) return;
      newSchedule.notes.cardio = cardios;
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
            {cardios.map((cardio, index) => (
              <NotesForm.Cardio
                key={uuidV4()}
                distance={cardio.distance}
                time={cardio.time}
                done={cardio.done}
                index={index}
                setCardios={setCardios}
              />
            ))}

            <button
              type="button"
              className="h-9 rounded-lg w-fit px-2 bg-gray-100
              flex items-center cursor-pointer"
            >
              <EditIcon />
            </button>
          </div>

          <NotesForm.Label label="Rate Workout" />
          <div className="flex gap-2">
            {labels.map(label => (
              <NotesForm.Rate
                key={uuidV4()}
                onClick={() => setRate(label)}
                selected={rate}
                rate={label}
              />
            ))}
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
