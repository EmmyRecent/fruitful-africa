"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useParams, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

// A route to handle route protection
const Protected = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }

    // Validate the user id matches the url
    if (!loading && user) {
      if (params.id !== user.uid) {
        router.replace(`/user/${user.uid}`);
      }
    }
  }, [user, loading, router, params.id]);

  if (loading)
    return (
      <div className="wrapper flex min-h-screen items-center justify-center">
        <p className="text-primaryColor text-base">Loading...</p>
      </div>
    );

  if (!user) return null; // Return nothing while redirecting to avoid flashing

  return children;
};

export default Protected;
