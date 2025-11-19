import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./app.css";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fruitful Africa",
  description: "An ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
