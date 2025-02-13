import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matin Hassan Pour",
  description: "Matin Hassan Pour Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
