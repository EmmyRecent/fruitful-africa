import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Nav />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default layout;
