import { ComponentProperties } from "@bennie-ui/types";

type HeaderStyles = {
  container: ComponentProperties;
};
export const header_styles: HeaderStyles = {
  container: {
    margin: { all: "2" },
    height: { value: "12" },
    flex: { justifyContent: "between", alignItems: "center" },
    colors: { text: { color: "white" } },
  },
};
