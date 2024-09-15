import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { Section } from "@bennie-ui/section";
import baselineStylesHref from "@bennie-ui/baseline/compiled/baseline.css?url";
import { Header } from "./components/header";
import { main_styles } from "./app.styles";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: baselineStylesHref },
];

// TODO: check why mx-auto is working and not auto
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-full bg-white dark:bg-gray-800">
        <Section {...main_styles}>
          <Header />
          <Section id="main-content">{children}</Section>
        </Section>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
