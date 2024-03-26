import "./globals.css";
import Dropdown from "./components/Dropdown";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-brand-1 from-50% to-brand-2 to-50%">
        <Dropdown />
        {children}
      </body>
    </html>
  );
}