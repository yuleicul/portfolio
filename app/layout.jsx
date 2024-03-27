import "./globals.css";
import Dropdown from "./components/Dropdown";

export const metadata = {
  title: "Yulei Chen",
  description: "My life and soul in rectangular form.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="sm:bg-gradient-to-r bg-gradient-to-b from-brand-1 from-50% to-brand-2 to-50%">
          <Dropdown className="fixed left-1/2 -translate-x-1/2 sm:top-2 top-1/2 sm:translate-y-0 -translate-y-1/2" />
          {children}
        </div>
      </body>
    </html>
  );
}
