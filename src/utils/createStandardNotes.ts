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
      },
      {
        splitTag: "b",
        cardio: [{time: 45, distance: 5}],
        rate: null,
        scheduledDate: null,
        trainingNotes: ""
      },
      {
        splitTag: "c",
        cardio: [{time: 25, distance: 3}],
        rate: null,
        scheduledDate: null,
        trainingNotes: ""
      },
      {
        splitTag: "d",
        cardio: [{time: 45, distance: 5}],
        rate: null,
        scheduledDate: null,
        trainingNotes: ""
      },
      {
        splitTag: "rest",
        cardio: [{time: 60, distance: 6}],
        rate: null,
        scheduledDate: null,
        trainingNotes: ""
      },
    ]
  };
  return notesDocStructure;
}
