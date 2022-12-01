import { NotesProps } from "../@types/NotesProps";

export function createNewUserStandardNotes(){
  const notesDocStructure: NotesProps ={
    sessionNotes: [
      {
        splitTag: "a",
        cardio: [{time: 45, distance: 5}],
        rate: null,
        scheduledDate: null,
        trainingNotes: ""
      }
    ]
  };
  return notesDocStructure;
}
