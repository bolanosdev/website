import { ComponentProperties } from "packages/phoenix-ui/libraries/types";
import { Text } from "@phoenix-ui/text";
import { Button } from "@phoenix-ui/button";
import { Section } from "@phoenix-ui/section";

export default function Examples() {
  const props: ComponentProperties = {
    children: "Content",
    colors: {
      text: { color: "white" },
      background: { color: "red" },
    },
    dark: {
      colors: {
        text: { color: "red" },
        background: { color: "white" },
      },
    },
    overrides: {
      medium: {
        children: "sm:Content",
        colors: {
          text: { color: "sky" },
          background: { color: "teal" },
        },
        dark: {
          colors: {
            text: { color: "teal" },
            background: { color: "sky" },
          },
        },
      },
      large: {
        children: "lg:Content",
        colors: {
          text: { color: "orange" },
          background: { color: "lime" },
        },
        dark: {
          colors: {
            text: { color: "lime" },
            background: { color: "orange" },
          },
        },
      },
    },
  };

  return (
    <div>
      <Text {...props}>Text</Text>
      <br />
      <Button
        action="primary"
        {...props}
        className="text-green-500 bg-yellow-500"
      >
        Button with Classes
      </Button>
      <br />
      <Section {...props}>Section</Section>
    </div>
  );
}
