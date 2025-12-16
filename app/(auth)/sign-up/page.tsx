import SignUpFormField from "@/components/SignUpFormField";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <section>
      <div className="wrapper">
        <Card className="mx-auto w-full max-w-[600px] border-none shadow-2xl">
          <CardHeader className="text-center">
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

            <p className="text-black">Create account</p>

            <p className="text-tertiaryColor text-base">
              Start your journey with us
            </p>
          </CardHeader>

          <CardContent>
            <SignUpFormField />
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-center gap-1">
              <div className="border-tertiaryColor/20 w-full border-[0.1px]"></div>
              <p className="text-tertiaryColor my-auto w-full max-w-fit shrink-0 text-sm">
                Or continue with
              </p>
              <div className="border-tertiaryColor/20 w-full border-[0.1px]"></div>
            </div>

            <Link href="#" className="mx-auto">
              <Image
                src="/google-logo.jpg"
                alt="Google logo"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </Link>
          </CardFooter>
        </Card>

        <div className="[&>p]:text-tertiaryColor [&>p]:[&>span]:text-primaryColor mt-6 flex flex-col items-center justify-center gap-3 [&>p]:text-sm [&>p]:[&>span]:cursor-pointer [&>p]:[&>span]:hover:underline">
          <p>
            Already have an account?{" "}
            <Link href="/login">
              <span>Login</span>
            </Link>
          </p>
          <p>
            Are you an artisan?{" "}
            <Link href="#">
              <span>Become a vendor</span>
            </Link>
          </p>

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

export default SignUp;
