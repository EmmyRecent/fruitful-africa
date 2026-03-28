"use client";

import { useAuth } from "@/app/context/AuthContext";
import AdminPage from "@/components/AdminPage";
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
      <AdminPage id={id} />
    </Protected>
  );
};

export default Admin;
