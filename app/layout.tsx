import { getProduct } from "@/firebase/services/firestore";
import { ProductWithId } from "@/types";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./app.css";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const interFont = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fruitful Africa",
  description: "An ecommerce platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let products: ProductWithId[] = [];

  try {
    products = await getProduct();
  } catch (error) {
    console.log("Error getting posts:", error);
  }

  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${interFont.variable} antialiased`}
      >
        <AuthProvider>
          <DataProvider initialProducts={products}>{children}</DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
