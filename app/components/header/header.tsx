import { FC } from "react";
import { Section } from "packages/phoenix-ui/components/primitives/section/src";

export const Header: FC = () => {
  return (
    <div className="header-wrapper">
      <header>
        <Section
          height={{ value: "14" }}
          colors={{ text: { color: "text-white" } }}
          margin={{ x: "mx-auto" }}
          padding={{ y: "py-4" }}
        >
          <Section flex={{ justifyContent: "justify-between" }}>
            <Section>Bolanos Dev</Section>
            <Section>Middle</Section>
            <Section>Right</Section>
          </Section>
        </Section>
      </header>
    </div>
  );
};
