"use client";

import { useAuth } from "@/app/context/AuthContext";
import Footer from "@/components/Footer";
import LogOut from "@/components/LogOut";
import Nav from "@/components/Nav";
import Protected from "@/components/Protected";
import { Button } from "@/components/ui/button";
import UserProfileSkeleton from "@/components/UserProfileSkeleton";
import { getUserCustomer } from "@/firebase/services/firestore";
import { UserCustomerData } from "@/types";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";

const User = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<UserCustomerData | null>(null);
  const [loading, setLoading] = useState(true);
  const createdAt = user?.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : "";

  useEffect(() => {
    if (!user?.uid) return;

    const handleFetchProfileData = async () => {
      try {
        setLoading(true);

        const data = await getUserCustomer(user.uid);

        setProfileData(data);
      } catch (error) {
        console.log("Error fetching user profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    handleFetchProfileData();
  }, [user]);

  return (
    <Protected>
      <Nav />

      <main className="">
        <div className="from-tertiaryColor to to-primaryColor flex min-h-1/2 items-center justify-center bg-linear-to-b py-20">
          <div className="wrapper">
            {loading ? (
              <UserProfileSkeleton />
            ) : (
              <div className="flex flex-col justify-center gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="items-center justify-center gap-4 sm:flex">
                  <div className="bg-primaryColor border-tertiaryColor mb-4 w-max rounded-full border-2 p-8 text-center shadow-md sm:mb-0">
                    <p className="text-3xl font-medium text-white capitalize">
                      {profileData?.initial}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-base text-white capitalize">
                      {profileData?.firstName} {profileData?.lastName}
                    </p>

                    <p className="text-base text-white">{profileData?.email}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="rounded-round bg-primaryColor inline-flex min-w-max border border-white/20 p-2">
                        <p className="text-xs text-white">
                          Customer since {createdAt}
                        </p>
                      </div>
                      <div className="rounded-round bg-primaryColor inline-flex min-w-max border border-white/20 p-2">
                        <p className="text-xs text-white">3 Orders</p>
                      </div>
                      <div className="rounded-round bg-primaryColor inline-flex min-w-max border border-white/20 p-2">
                        <p className="text-xs text-white">
                          $314.69 Total Spent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="mt-4 cursor-pointer" size="lg">
                  <Edit />
                  <span>Edit Profile</span>
                </Button>
              </div>
            )}
          </div>
        </div>

        <section></section>

        <div className="wrapper">
          <LogOut />
        </div>
      </main>

      <Footer />
    </Protected>
  );
};

export default User;
