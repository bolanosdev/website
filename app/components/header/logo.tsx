import React from "react";
import { Text, Link } from "@bennie-ui/text";

export const Logo: React.FunctionComponent = () => (
  <div className="logo">
    <Link
      href="/"
      align="left"
      colors={{ text: { color: "gray" } }}
      size="2xl"
      weight="bold"
      display="block"
    >
      Bolanos Dev
    </Link>
    <Text tag="p">15 years building a godamn blog</Text>
  </div>
);
