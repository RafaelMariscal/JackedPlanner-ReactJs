import { Timestamp } from "firebase/firestore";
import { UserPlannersProps } from "../@types/PlannerProps";

export function createNewUserStandardPlanners(){
  const plannerDocStructure: UserPlannersProps = {
    planner1: {
      name: "",
      schedule: ["a","b","c","rest","d","c","rest"],
      startDate: Timestamp.fromDate(new Date()),
      splits: [
        {
          splitLabel: "a",
          splitTitle: "Chest / Shouders",
          splitStartDate: Timestamp.fromDate(new Date()),
          splitExercises: [
            {
              index: 1,
              name: "(DB) Bench Press",
              sets: 3,
              reps: 12,
              weightUnd: "kg",
              description: "With arms angled like 120° to your body, go down with the dumbbells slightly below the sternum. Then, explosively, push it straight up",
              setsWeight: [26, 30, 30],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 2,
              name: "(Sm) Incline Bench Press",
              sets: 4,
              reps: 10,
              description: "Put the bench at 20° right down the smith machine. The barbell goes down straight to the sternum ultil the arms make 90°, then push it straight up.",
              weightUnd: "kg",
              setsWeight: [40, 60, 60, 50],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 3,
              name: "(Cb) Chest Fly - Bench 90°",
              sets: 3,
              reps: 10,
              description: "Put the bench at 90° 2 feet in front of the crossover machine. The cabes position needs to be right at the sternum. Start the moviment with the arms semi-flexed and finish it with completely straight.",
              weightUnd: "plt",
              setsWeight: [3, 3, 3],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 3,
              name: "Crossover",
              sets: 3,
              reps: 10,
              description: "Just like the Cables Chest Fly, but you'll be standed and the arms goes down like 30° in front to your body.",
              weightUnd: "plt",
              setsWeight: [3, 3, 3],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 4,
              name: "(DB) Lateral Raises",
              sets: 4,
              reps: 12,
              description: "With the arms semi-flexed, raise the arms slightly in front of your body. The elbows goes up right to the level of your shoulders.",
              weightUnd: "kg",
              setsWeight: [10, 12, 12, 10],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 5,
              name: "Military Overhead Press",
              sets: 4,
              reps: 8,
              description: "Stand in front the barbell right at your shouders height, tight up the gluts and core then press up the barbell until you lock your elbows, then go down to the start position",
              weightUnd: "kg",
              setsWeight: [20, 24, 26, 28],
              liftedWeight: [],
              liftedReps: []
            },
            {
              index: 6,
              name: "(Cb) Rope Triceps Extension",
              sets: 3,
              reps: 12,
              description: "At 2 steps back of the cable machine, incline your body like 15°. Push the rope until your arms become fully straight, then return to almost the machine full range motion.",
              weightUnd: "plt",
              setsWeight: [6, 8, 8],
              liftedWeight: [],
              liftedReps: []
            }
          ],
          splitSchedule: []
        }
      ]
    },
    planner2: null,
    planner3: null
  };
  return plannerDocStructure;
}
