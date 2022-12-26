import { Timestamp } from "firebase/firestore";
import { v4 as uuidV4} from "uuid";
import { CardioProps, ExerciseNotes, ScheduleLabel, UserPlannersProps } from "../@types/PlannerProps";
import { createSplitScheduleStructure } from "./createSplitScheduleStructure";

export function createNewUserStandardPlanners(){
  const schedule: ScheduleLabel[] = ["a","b","c","rest","d","c","rest"];
  const plannerDuration = 180;
  const startDate = new Date();
  const standardCardios:CardioProps = {
    distance: 5,
    time: 35,
    done: false
  };
  const cardios = [standardCardios];
  const cardioRest = [standardCardios, standardCardios];

  const {calendar, scheduleByLabel} = createSplitScheduleStructure({
    schedule, plannerDuration, startDate, cardios, cardioRest
  });

  const plannerDocStructure: UserPlannersProps = {
    planner1: {
      uid: uuidV4(),
      name: "PUSH PULL LEGS by Jeff Nippard",
      schedule: schedule,
      startDate: Timestamp.fromMillis(Date.parse(startDate.toDateString())),
      splits: [
        {
          splitLabel: "a",
          splitTitle: "Chest / Shouders",
          splitExercises: [
            {
              uid: uuidV4(),
              index: 1,
              name: "(DB) Bench Press",
              sets: 3,
              reps: 12,
              weightUnd: "kg",
              description: "With arms angled like 120° to your body, go down with the dumbbells slightly below the sternum. Then, explosively, push it straight up",
              setsWeight: [26, 30, 30],
            },
            {
              uid: uuidV4(),
              index: 2,
              name: "(Sm) Incline Bench Press",
              sets: 4,
              reps: 10,
              description: "Put the bench at 20° right down the smith machine. The barbell goes down straight to the sternum ultil the arms make 90°, then push it straight up.",
              weightUnd: "kg",
              setsWeight: [40, 60, 60, 50],
            },
            {
              uid: uuidV4(),
              index: 3,
              name: "(Cb) Chest Fly - Bench 90°",
              sets: 3,
              reps: 10,
              description: "Put the bench at 90° 2 feet in front of the crossover machine. The cabes position needs to be right at the sternum. Start the moviment with the arms semi-flexed and finish it with completely straight.",
              weightUnd: "plt",
              setsWeight: [3, 3, 3],
            },
            {
              uid: uuidV4(),
              index: 3,
              name: "Crossover",
              sets: 3,
              reps: 10,
              description: "Just like the Cables Chest Fly, but you'll be standed and the arms goes down like 30° in front to your body.",
              weightUnd: "plt",
              setsWeight: [3, 3, 3],
            },
            {
              uid: uuidV4(),
              index: 4,
              name: "(DB) Lateral Raises",
              sets: 4,
              reps: 12,
              description: "With the arms semi-flexed, raise the arms slightly in front of your body. The elbows goes up right to the level of your shoulders.",
              weightUnd: "kg",
              setsWeight: [10, 12, 12, 10],
            },
            {
              uid: uuidV4(),
              index: 5,
              name: "Military Overhead Press",
              sets: 4,
              reps: 8,
              description: "Stand in front the barbell right at your shouders height, tight up the gluts and core then press up the barbell until you lock your elbows, then go down to the start position",
              weightUnd: "kg",
              setsWeight: [20, 24, 26, 28],
            },
            {
              uid: uuidV4(),
              index: 6,
              name: "(Cb) Rope Triceps Extension",
              sets: 3,
              reps: 12,
              description: "At 2 steps back of the cable machine, incline your body like 15°. Push the rope until your arms become fully straight, then return to almost the machine full range motion.",
              weightUnd: "plt",
              setsWeight: [6, 8, 8],
            }
          ],
          splitSchedule: scheduleByLabel["a"]
        },
        {
          splitLabel: "b",
          splitTitle: "Full Back",
          splitExercises: [
            {
              uid: uuidV4(),
              index: 1,
              name: "Pull-ups (Body Weight)",
              sets: 3,
              reps: 10,
              description: "Tight up the hams, gluts, and lowerback. When pull-up, the arms needs to be 90° with your body and reach the sternum.",
              weightUnd: "body",
              setsWeight: [0, 0, 0],
            },
            {
              uid: uuidV4(),
              index: 2,
              name: "Pull-down machine",
              sets: 4,
              reps: 12,
              description: "With the body a little bit inclined backwards, pulldown the barbell right to the sternum height and slightly in front of your body. The arms never goes completely straight.",
              weightUnd: "plt",
              setsWeight: [8, 12, 12, 10],
            },
            {
              uid: uuidV4(),
              index: 3,
              name: "Incline Barbell Rows",
              sets: 4,
              reps: 10,
              description: "With the body inclined 120°, the latts needs to be fully extended. Befor row, lock your shoulders and make shure that the barbell goes right to your belly button, then return with a controlled moviment.",
              weightUnd: "plt",
              setsWeight: [8, 12, 12, 10],
            },
            {
              uid: uuidV4(),
              index: 4,
              name: "Incline Bench Cable Row",
              sets: 3,
              reps: 10,
              description: "Put the bench(120°) 4 steps way of the pulldown machine. With the body leaning the bench and the kneed on the sit, start the pull down. The bar goes in the bench direction and as far as it goes, straight up your body.",
              weightUnd: "plt",
              setsWeight: [6, 8, 8],
            },
            {
              uid: uuidV4(),
              index: 5,
              name: "(w) Barbell Arms Curl",
              sets: 4,
              reps: 12,
              description: "With the arms right aside your body, curl the W barbell to 70°, then return to 160°.",
              weightUnd: "kg",
              setsWeight: [18, 24, 24, 20],
            },
          ],
          splitSchedule: scheduleByLabel["b"]
        },
        {
          splitLabel: "c",
          splitTitle: "Quads and Hams",
          splitExercises: [
            {
              uid: uuidV4(),
              index: 1,
              name: "Squats",
              sets: 8,
              reps: 6,
              description: "With the feet shoulders-with apart, toes pointed slightly out and tight the core muscles. Send hips back and bend at knees at least to more then 90°. Press trough heels back up to straight up.",
              weightUnd: "kg",
              setsWeight: [50, 70, 90, 100, 110, 110, 90, 90],
            },
            {
              uid: uuidV4(),
              index: 2,
              name: "Leg Extrension Machine",
              sets: 4,
              reps: 15,
              description: "With a dorsiflexion foot, the legs needs to be fully extended, then bend the knees almost to the machines full course",
              weightUnd: "plt",
              setsWeight: [8, 10, 10, 10],
            },
            {
              uid: uuidV4(),
              index: 4,
              name: "Leg Press 45°",
              sets: 4,
              reps: 12,
              description: "With the feet slightly more then shouders-with and toes pointed a bit outwards, place it right at the middle of the machines support. Bend the knees as far as you can, then push it up",
              weightUnd: "kg",
              setsWeight: [80, 100, 120, 120],
            },
            {
              uid: uuidV4(),
              index: 4,
              name: "Leg Curl Machine",
              sets: 4,
              reps: 15,
              description: "With a dorsiflexion foot and tight glutes, bend the knees as far as possible withou shrink the lowerback. then return it until the machines full course",
              weightUnd: "kg",
              setsWeight: [6, 8, 8, 8],
            },
            {
              uid: uuidV4(),
              index: 5,
              name: "Barbell Stiff",
              sets: 4,
              reps: 12,
              description: "Take the barbell with the arms shouders-with apart. With the core muscles tight up and legs semi-flexed durring all the moviment, send hips back and bring the barbell right to your shins, then stiff it straight up.",
              weightUnd: "kg",
              setsWeight: [30, 40, 50, 50],
            },
          ],
          splitSchedule: scheduleByLabel["c"]
        },
        {
          splitLabel: "d",
          splitTitle: "Arms / Shoulders",
          splitExercises: [
            {
              uid: uuidV4(),
              index: 1,
              name: "Rope Triceps Extension",
              sets: 3,
              reps: 12,
              description: "with 2 steps back to the cable machine, incline your body like 20°. Go down until the arms straight up, then return to a 70° arm anglo.",
              weightUnd: "plt",
              setsWeight: [4, 6, 6],
            },
            {
              uid: uuidV4(),
              index: 2,
              name: "Close Grip Bench Press",
              sets: 3,
              reps: 15,
              description: "With the hands positioned slightly more then shoulders-width, the barbell goes down until the arms reach 90°, then explode straight up to almost lock up position.",
              weightUnd: "kg",
              setsWeight: [40, 50, 50],
            },
            {
              uid: uuidV4(),
              index: 2,
              name: "Single-Arm Overhead Triceps Ext.",
              sets: 3,
              reps: 10,
              description: "",
              weightUnd: "plt",
              setsWeight: [2, 3, 3],
            },
            {
              uid: uuidV4(),
              index: 3,
              name: "(Cb) Latteral Raise",
              sets: 4,
              reps: 12,
              description: "Using a wrist suppot, position yourself aside the machine with the cable passing between your legs and, with a semi-flexed arm, raise the arm to shouders height then return.",
              weightUnd: "plt",
              setsWeight: [2, 3, 3, 3],
            },
            {
              uid: uuidV4(),
              index: 4,
              name: "Scott Curl Machine",
              sets: 3,
              reps: 10,
              description: "The arms goes down until reach 160° and then, explosively, curl it till the arms reach slughtly less then 90°.",
              weightUnd: "plt",
              setsWeight: [6, 8, 10],
            },
            {
              uid: uuidV4(),
              index: 5,
              name: "Incline Dumbell Curl",
              sets: 3,
              reps: 12,
              description: "With the bench at 110°, simultaneously and with supination, curl it till the arms reach slughtly less then 90°.",
              weightUnd: "kg",
              setsWeight: [10, 10, 8],
            }
          ],
          splitSchedule: scheduleByLabel["d"]
        },
        {
          splitLabel: "rest",
          splitTitle: "Rest day",
          splitExercises: [],
          splitSchedule: scheduleByLabel["rest"]
        },
      ],
      plannerCalendar: calendar
    },
    planner2: null,
    planner3: null
  };

  plannerDocStructure.planner1?.splits.forEach(split=>{
    const splitExercises = split.splitExercises;
    const exerciseInfo: ExerciseNotes[] = [];
    splitExercises.map(exercise=>{
      const liftedReps: ("empty" | number)[] = [];
      const liftedWeight: ("empty" | number)[] = [];
      for (let i = 0; i < exercise.sets; i++) {
        liftedReps.push("empty");
        liftedWeight.push("empty");
      }
      exerciseInfo.push({
        liftedReps,liftedWeight,
        setsWeight: exercise.setsWeight
      });
    });
    split.splitSchedule.map((schedule)=>{
      schedule.exerciseNotes = exerciseInfo;
    });
  });

  return plannerDocStructure;
}
