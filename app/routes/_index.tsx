import type { MetaFunction } from "@remix-run/cloudflare";
import { Text } from "@phoenix-ui/text";
import { Button } from "@phoenix-ui/button";
import { Section } from "@phoenix-ui/section";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to BolanosDev! Using Phoenix-UI and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <Section padding={{ all: "0.5" }}>
      <Text display="block" colors={{ text: { color: "teal" } }} align="center">
        Welcome to BolanosDev
      </Text>

      <Button
        colors={{ text: { color: "red" }, background: { color: "teal" } }}
      >
        Hello World
      </Button>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs{" "}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </Section>
  );
}
