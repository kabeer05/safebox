import type { Metadata } from "next";
import "./globals.css";

// Components

export const metadata: Metadata = {
  title: "SafeBox: Secure Password Manager",
  description: "SafeBox is a secure password manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
