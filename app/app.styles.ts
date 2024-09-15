import { ComponentProperties } from "@bennie-ui/types";

export const main_styles: ComponentProperties = {
  size: "sm",
  margin: { x: "auto" },
  flex: { direction: "col" },
  width: { value: "full" },
  colors: {
    text: { color: "gray", weight: "400" },
    background: { color: "white" },
  },
  dark: {
    colors: {
      text: { color: "gray", weight: "400" },
      background: { color: "gray", weight: "800" },
    },
  },
  overrides: {
    large: {
      width: { value: "2/3" },
    },
  },
};
