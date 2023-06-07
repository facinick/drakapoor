import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";

export const metadata = {
  title: "Dr A Kapoor's Diabetes Control Clinic",
  description:
    "Diabetic complications, Blood sugar management, weight loss management, Diabetes reversal, Thyroid health management",
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
