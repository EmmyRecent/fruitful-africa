"use client";

import { auth } from "@/firebase";
import { signInUser } from "@/firebase/services/auth/signIn";
import { establishServerSession } from "@/lib/auth/clientSession";
import { handleLoginValidation } from "@/lib/actions";
import { signOut } from "firebase/auth";
import { State } from "@/types";
import { LockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/button";

type LoginFormFieldProps = {
  userRole: string;
};

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

const LoginFormField = ({ userRole }: LoginFormFieldProps) => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [formError, setFormError] = useState("");
  const [validationState, setValidationState] = useState<State>(initialState);
  const [isPending, setIsPending] = useState(false);
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

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const formData = new FormData(e.currentTarget);

    setIsPending(true);

    const result = await handleLoginValidation(validationState, formData);

    setValidationState(result);
    setIsPending(false);

    const hasValidationErrors =
      result.errors && Object.keys(result.errors).length > 0;

    if (hasValidationErrors) return;

    const { email, password } = result.data;

    try {
      const signInResult = await signInUser(email, password);

      if (signInResult.error || !signInResult.user) {
        setFormError("Email or Password may be incorrect, please try again!");

        return;
      }

      const firebaseUser = signInResult.user;

      // Is admin? Check if the user has the admin custom claim.
      if (userRole === "admin") {
        const { claims } = await firebaseUser.getIdTokenResult(true);

        if (claims.role !== "admin") {
          setFormError(
            "This account does not have admin access! Please contact support if you believe this is an error.",
          );

          // Sign out the user and return.
          await signOut(auth);

          return;
        }
      }

      // Establish server session.
      try {
        await establishServerSession(firebaseUser);
      } catch {
        setFormError(
          "Signed in with Firebase, but the server session failed. Check the terminal for POST /api/auth/session errors and that FIREBASE_SERVICE_ACCOUNT_KEY is set in .env.local.",
        );

        return;
      }

      setInputValue({ email: "", password: "" });
      // Full page navigation so the new httpOnly session cookie is always sent (avoids proxy sending you back to login).
      window.location.assign(`/${userRole}/${firebaseUser.uid}`);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="mt-6 flex flex-col gap-4">
        <InputField
          type="email"
          name="email"
          text="Email Address"
          placeholder="you@example.com"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={MailIcon}
          fieldErrors={validationState?.errors?.email}
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
          fieldErrors={validationState?.errors?.password}
        />

        {userRole && userRole !== "admin" && (
          <Link href="#" className="ml-auto">
            <p className="text-primaryColor text-sm hover:underline">
              Forgot password?
            </p>
          </Link>
        )}
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
