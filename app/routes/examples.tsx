import { ComponentProperties } from "packages/bennie-ui/libraries/types";
import { Button } from "@bennie-ui/button";

export default function Examples() {
  const props: ComponentProperties = {
    children: "Content",
    colors: {
      text: { color: "white" },
      background: { color: "red" },
      border: { color: "teal", weight: "900" },
    },
    dark: {
      colors: {
        text: { color: "red" },
        background: { color: "white" },
        border: { color: "rose", weight: "900" },
      },
    },
    overrides: {
      medium: {
        children: "sm:Content",
        colors: {
          text: { color: "sky" },
          background: { color: "teal" },
          border: { color: "lime" },
        },
        dark: {
          colors: {
            text: { color: "teal" },
            background: { color: "sky" },
            border: { color: "red" },
          },
        },
      },
      large: {
        children: "lg:Content",
        colors: {
          text: { color: "orange" },
          background: { color: "lime" },
          border: { color: "orange" },
        },
        dark: {
          colors: {
            text: { color: "lime" },
            background: { color: "orange" },
            border: { color: "sky" },
          },
        },
      },
    },
  };

  return (
    <div>
      <Button {...props}>Button with Classes</Button>
    </div>
  );
}
