import type { NuxtConfig } from "nuxt/config";

export const staticHead: Required<NuxtConfig>["app"]["head"] = {
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swa",
    },
  ],
};
