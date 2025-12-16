import { signOutUser } from "@/firebase/services/auth/signOut";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LogOut = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await signOutUser();

      router.push("/login");
    } catch (error) {
      throw new Error("Failed to log user out!", { cause: error });
    }
  };

  return (
    <Button
      className="my-4 flex w-max cursor-pointer items-center justify-center"
      size="lg"
      onClick={handleLogOut}
    >
      <LogOutIcon />
      <span>Log out</span>
    </Button>
  );
};

export default LogOut;
