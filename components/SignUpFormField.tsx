"use client";

import { useAuth } from "@/app/context/AuthContext";
import { signUpUser } from "@/firebase/services/auth";
import { addUserToCustomerCollection } from "@/firebase/services/firestore";
import { handleSignUpFormValidation } from "@/lib/actions";
import { State, UserCustomerData } from "@/types";
import { Timestamp } from "firebase/firestore";
import { LockIcon, MailIcon, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import InputField from "./InputField";
import { Button } from "./ui/button";

const SignUpFormField = () => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
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
    handleSignUpFormValidation,
    initialState,
  );
  const router = useRouter();

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

  const handleFormSubmission = async () => {
    const { firstName, lastName, email, password } = message.data;

    console.log("email and password:", email, password);

    try {
      const result = await signUpUser(email, password);
      const data: UserCustomerData = {
        firstName,
        lastName,
        email,
        initial: `${firstName?.slice(0, 1)}${lastName?.slice(0, 1)}`,
        createdAt: Timestamp.now(),
      };

      console.log("Result from user signUp:", result);

      // TODO: Store user information in database
      if (result.user) {
        await addUserToCustomerCollection(data, result.user?.uid);

        setInputValue({
          firstName: "",
          lastName: "",
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
          type="text"
          name="firstName"
          text="First name"
          placeholder="John"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={User}
          fieldErrors={message?.errors?.firstName}
        />

        <InputField
          type="text"
          name="lastName"
          text="Last name"
          placeholder="Doe"
          inputValue={inputValue}
          handleChange={handleChange}
          Component={User}
          fieldErrors={message?.errors?.lastName}
        />

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

        {/* <Link href="#" className="ml-auto">
                  <p className="text-primaryColor text-sm hover:underline">
                    Forgot password?
                  </p>
                </Link> */}
      </div>

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
