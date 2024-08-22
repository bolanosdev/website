import React from "react";
import { Text, Link } from "@phoenix-ui/text";

export const Logo: React.FunctionComponent = () => (
  <div className="logo">
    <Link
      href="/"
      align="left"
      colors={{ text: { color: "gray" } }}
      size="text-2xl"
      weight="font-bold"
      display="block"
    >
      Bolanos Dev
    </Link>
    <Text tag="p">15 years building a godamn blog</Text>
  </div>
);
