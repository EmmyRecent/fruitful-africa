import LoginFormField from "@/components/LoginFormField";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const AdminLogin = () => {
  return (
    <section>
      <div className="wrapper">
        <Card className="mx-auto w-full max-w-[600px] border-none shadow-2xl">
          <CardHeader className="gap-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/logo.png"
                alt="Fruitful Africa logo"
                width={44}
                height={54}
                className="rounded-[5px]"
              />
              <p className="text-primaryColor inline-flex text-lg font-semibold">
                FruitfulAfrica
              </p>
            </div>

            <p className="font-semibold text-black">Admin Login</p>

            <p className="text-black">Login to access the admin dashboard</p>
          </CardHeader>

          <CardContent>
            <LoginFormField userRole={"admin"} />
          </CardContent>
        </Card>

        <div className="[&>p]:text-tertiaryColor [&>p]:[&>span]:text-primaryColor mt-6 flex flex-col items-center justify-center gap-3 [&>p]:text-sm [&>p]:[&>span]:cursor-pointer [&>p]:[&>span]:hover:underline">
          <p>Not an admin?</p>

          <Link href="/">
            <p className="text-tertiaryColor text-sm font-semibold">
              ← Back to home
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
