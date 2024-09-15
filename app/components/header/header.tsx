import { FC } from "react";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";
import { Section } from "@bennie-ui/section";

import { header_styles } from "./header.styles";
export const Header: FC = () => {
  return (
    <div className="header-wrapper">
      <header>
        <Section {...header_styles.container}>
          <Section flex={{ justifyContent: "start", alignItems: "center" }}>
            <Section size="2xl">Bolanos Dev</Section>
          </Section>
          <Section>
            <Button
              onClick={() => {
                alert("user profile");
              }}
            >
              <Icon
                figure="UserIcon"
                colors={{ text: { color: "black" } }}
                dark={{ colors: { text: { color: "white" } } }}
              />
            </Button>
          </Section>
        </Section>
      </header>
    </div>
  );
};
