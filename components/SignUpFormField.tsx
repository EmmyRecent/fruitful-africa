"use client";

import { useAuth } from "@/app/context/AuthContext";
import { signUpUser } from "@/firebase/services/auth";
import { establishServerSession } from "@/lib/auth/clientSession";
import { addUserToCustomerCollection } from "@/firebase/services/firestore";
import { handleSignUpFormValidation } from "@/lib/actions";
import { State, UserCustomerData } from "@/types";
import { Timestamp } from "firebase/firestore";
import { LockIcon, MailIcon, User } from "lucide-react";
import { useActionState, useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/button";
import { object } from "zod";

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

const SignUpFormField = () => {
  // const { user } = useAuth();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [formError, setFormError] = useState("");
  const [validationState, setValidationState] = useState<State>(initialState);
  const [isPending, setIsPending] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisibility((prevValue) => !prevValue);
  };

  //A function to handle user signing into the
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsPending(true);

    const result = await handleSignUpFormValidation(validationState, formData);

    setValidationState(result);
    setIsPending(false);

    const hasValidationErrors =
      result.errors && Object.keys(result.errors).length > 0;

    if (hasValidationErrors) return;

    const { firstName, lastName, email, password } = result.data;

    try {
      const signUpResult = await signUpUser(email, password);

      const data: UserCustomerData = {
        firstName,
        lastName,
        email,
        initial: `${firstName?.slice(0, 1)}${lastName?.slice(0, 1)}`,
        createdAt: Timestamp.now(),
      };

      if (signUpResult.error) {
        setFormError("Error signing user, please try again!");
      } else {
        const uid = signUpResult.user?.uid;

        if (uid && signUpResult.user) {
          await addUserToCustomerCollection(data, uid);

          try {
            await establishServerSession(signUpResult.user);
          } catch {
            setFormError("Account created but session failed. Try signing in.");
            return;
          }

          setInputValue({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
          window.location.assign(`/user/${uid}`);
        }
      }

      console.log("Result from user signUp:", signUpResult);
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="mt-6 flex flex-col gap-4">
        <InputField
          type="text"
          name="firstName"
          text="First name"
          placeholder="John"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={User}
          fieldErrors={validationState?.errors?.firstName}
        />

        <InputField
          type="text"
          name="lastName"
          text="Last name"
          placeholder="Doe"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={User}
          fieldErrors={validationState?.errors?.lastName}
        />

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

        {/* <Link href="#" className="ml-auto">
                  <p className="text-primaryColor text-sm hover:underline">
                    Forgot password?
                  </p>
                </Link> */}
      </div>

      {formError && <p className="pt-1 text-xs text-red-600">{formError}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="bg-primaryColor hover:bg-primaryColor/90 rounded-round mt-6 w-full cursor-pointer font-medium text-white"
      >
        {isPending ? "Submitting..." : "Create Account"}
      </Button>
    </form>
  );
};

export default SignUpFormField;
