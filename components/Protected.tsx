"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Spinner } from "./ui/spinner";

// A route to handle route protection
const Protected = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const isAdmin = pathname.split("/").includes("admin");

    if (!loading && !user) {
      router.replace(isAdmin ? "/admin-login" : "/login");
      return;
    }

    if (!loading && user && params.id !== user.uid) {
      router.replace(isAdmin ? `/admin/${user.uid}` : `/user/${user.uid}`);
    }
  }, [user, loading, router, params.id, pathname]);

  if (loading)
    return (
      <div className="wrapper flex min-h-screen items-center justify-center">
        <Spinner className="text-primaryColor size-6" />
      </div>
    );

  if (!user) return null; // Return nothing while redirecting to avoid flashing

  return children;
};

export default Protected;
