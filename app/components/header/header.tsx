import { FC } from "react";
import { Section } from "packages/phoenix-ui/components/primitives/section/src";

export const Header: FC = () => {
  return (
    <div className="header-wrapper">
      <header>
        <Section
          height={{ value: "14" }}
          colors={{ text: { color: "gray" } }}
          dark={{ colors: { text: { color: "white" } } }}
          margin={{ x: "auto" }}
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
