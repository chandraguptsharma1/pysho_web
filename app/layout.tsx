import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prasad Psycho",
  description: "Premium psychology and mental wellness website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}