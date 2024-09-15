import type { MetaFunction } from "@remix-run/cloudflare";
import { Text } from "@bennie-ui/text";
import { Section } from "@bennie-ui/section";
import { Icon } from "@bennie-ui/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to BolanosDev! Using Bennie-UI and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <Section
      padding={{ all: "0.5" }}
      width={{ value: "full" }}
      colors={{ background: { color: "gray", weight: "900" } }}
    >
      <Text>Hero Image</Text>
    </Section>
  );
}
