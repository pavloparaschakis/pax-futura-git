import { initPlasmicLoader } from "@plasmicapp/loader-react";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: import.meta.env.VITE_PLASMIC_PROJECT_ID,
      token: import.meta.env.VITE_PLASMIC_PROJECT_TOKEN,
    },
  ],
  preview: import.meta.env.DEV,
});
