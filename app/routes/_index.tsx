import type { MetaFunction } from "@remix-run/cloudflare";
import { Text } from "@phoenix-ui/text";
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
    <Section>
      <Text colors={{ text: { color: "text-teal" } }}>
        Welcome to BolanosDev
      </Text>
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
