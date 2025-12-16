"use client";

import { useAuth } from "@/app/context/AuthContext";
import { signInUser } from "@/firebase/services/auth/signIn";
import { handleLoginValidation } from "@/lib/actions";
import { State } from "@/types";
import { LockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/button";

const LoginFormField = () => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [formError, setFormError] = useState("");
  const initialState: State = {
    errors: {},
    message: null,
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };
  const [message, formAction, isPending] = useActionState(
    handleLoginValidation,
    initialState,
  );
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisibility((prevValue) => !prevValue);
  };

  const handleFormSubmission = async () => {
    const { email, password } = message.data;

    try {
      const result = await signInUser(email, password);

      if (result.error) {
        console.log("There was an error in singing this user in", result.error);

        setFormError("Email or Password may be incorrect, please try again!");
      } else {
        setInputValue({
          email: "",
          password: "",
        });

        router.push(`/user/${user?.uid}`);
      }
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <form action={formAction} onSubmit={handleFormSubmission}>
      <div className="mt-6 flex flex-col gap-4">
        <InputField
          type="email"
          name="email"
          text="Email Address"
          placeholder="you@example.com"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={MailIcon}
          fieldErrors={message?.errors?.email}
        />

        <InputField
          type={passwordVisibility ? "text" : "password"}
          name="password"
          text="Password"
          placeholder="your password"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={LockIcon}
          passwordVisibility={passwordVisibility}
          handleTogglePasswordVisibility={handleTogglePasswordVisibility}
          fieldErrors={message?.errors?.password}
        />

        <Link href="#" className="ml-auto">
          <p className="text-primaryColor text-sm hover:underline">
            Forgot password?
          </p>
        </Link>
      </div>

      {formError && <p className="pt-1 text-xs text-red-600">{formError}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="bg-primaryColor hover:bg-primaryColor/90 rounded-round mt-6 w-full cursor-pointer font-medium text-white"
      >
        {isPending ? "Submitting" : "Log In"}
      </Button>
    </form>
  );
};

export default LoginFormField;
