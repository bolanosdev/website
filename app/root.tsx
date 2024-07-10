import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { Section } from '@phoenix-ui/section'
import { Header } from "./components/header";
import baselineStylesHref from "@phoenix-ui/baseline/compiled/baseline.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: baselineStylesHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full dark:bg-gray-800 ">
        <Section className="w-2/3 flex flex-col"
          margin={{ x: 'mx-auto' }}
          colors={{ text: { color: 'text-gray' } }}
          dark={{ colors: { text: { color: 'text-white' } } }}>
          <Header />
          <Section id="main-content">
            {children}
          </Section>
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
