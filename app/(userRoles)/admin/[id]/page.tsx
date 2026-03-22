"use client";

import { useAuth } from "@/app/context/AuthContext";
import AdminPage from "@/components/AdminPage";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Protected from "@/components/Protected";

const Admin = () => {
  const { user } = useAuth();
  let id = "";

  if (user) {
    id = user.uid;
  }

  console.log("User:", user);

  return (
    <Protected>
      <Nav />

      <AdminPage id={id} />

      <Footer />
    </Protected>
  );
};

export default Admin;
