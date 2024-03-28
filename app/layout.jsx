import "./globals.css";
import { cookies } from "next/headers";
import Dropdown from "./components/Dropdown";
import { THEME } from "./common/constants";

export const metadata = {
  title: "Yulei Chen",
  description: "My life and soul in rectangular form.",
};

export default function RootLayout({ children }) {
  // Fix theme switching after first loading
  // https://www.reddit.com/r/nextjs/comments/126wrg8/flashing_theme_selection/
  const themeCookie = cookies().get("--yulei-theme");
  const defaultTheme = themeCookie?.value || "theme0";

  return (
    <html lang="en">
      <body
        style={{
          "--brand-1": THEME[defaultTheme].brand1,
          "--brand-2": THEME[defaultTheme].brand2,
          "--img-hue-rotate": THEME[defaultTheme].hueRotate,
        }}
      >
        <div className="min-h-screen md:bg-gradient-to-r from-brand-1 from-50% to-brand-2 to-50%">
          <Dropdown
            className="
              fixed top-5 right-5
              md:right-1/2 md:translate-x-1/2
            "
          />
          {children}
        </div>
      </body>
    </html>
  );
}
