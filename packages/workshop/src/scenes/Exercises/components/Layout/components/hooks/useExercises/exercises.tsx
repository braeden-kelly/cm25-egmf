import type { ExerciseData } from "../../ExerciseList/shared/type";

import { IconAdjustmentsAlt } from "@tabler/icons-react";

export const exerciseMapping: Record<string, number> = {
  "set-up": 0,
  "exercise-1": 1,
  "exercise-2": 2,
  "exercise-3": 3,
  "exercise-4": 4,
};

export const exercises: ExerciseData[] = [
  {
    title: "Getting Set Up",
    subTitle: "Repo links and setup instructions",
    to: "set-up",
    icon: <IconAdjustmentsAlt size={18} />,
  },
  {
    title: "Configuring Module Federation",
    subTitle: "Configure the Module Federation plugin for the shop",
    to: "exercise-1",
  },
  {
    title: "Sharing Common Modules",
    subTitle: "Let's dedupe some code and decrease the bundle sizes",
    to: "exercise-2",
  },
  {
    title: "Fault Tolerance",
    subTitle: "MFEs that go down shouldn't impact the rest of the app",
    to: "exercise-3",
  },
  {
    title: "Adding More Micro-Frontends",
    subTitle: "The app still needs some micro-frontends added to work",
    to: "exercise-4",
  },
];
