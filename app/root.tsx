import unocss from "unocss";
import reset from "@unocss/reset/tailwind.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import globalStylesheetUrl from "./global-styles.css?url";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesheetUrl },
    {
      rel: "stylesheet",
      href: unocss,
    },
    {
      rel: "stylesheet",
      href: reset,
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="text-red-800 p-10">
      {/* todo: add background and theme toggle here */}
      <Outlet />
    </div>
  );
}
