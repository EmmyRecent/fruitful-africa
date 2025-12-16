import { Eye, EyeOff, LucideIcon } from "lucide-react";

type InputFieldProps = {
  type: string;
  name: string;
  text: string;
  placeholder?: string;
  inputValue: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Component?: LucideIcon;
  passwordVisibility?: boolean;
  handleTogglePasswordVisibility?: () => void;
  fieldErrors?: string[];
};

const InputField = ({
  type,
  name,
  text,
  placeholder,
  inputValue,
  handleChange,
  Component,
  passwordVisibility,
  handleTogglePasswordVisibility,
  fieldErrors,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-black"
      >
        {text}
      </label>

      <div className="rounded-round has-[input:focus]:border-tertiaryColor flex items-center gap-2 border border-gray-300 bg-white px-4 py-2">
        {Component && <Component className="text-tertiaryColor" size={22} />}

        <input
          type={type}
          name={name}
          value={inputValue[name as keyof typeof inputValue] || ""}
          onChange={handleChange}
          placeholder={placeholder}
          className="rounded-round h-8 w-full bg-transparent outline-none"
        />

        {handleTogglePasswordVisibility &&
          (passwordVisibility ? (
            <Eye
              className="text-tertiaryColor cursor-pointer"
              size={22}
              onClick={handleTogglePasswordVisibility}
            />
          ) : (
            <EyeOff
              className="text-tertiaryColor cursor-pointer"
              size={22}
              onClick={handleTogglePasswordVisibility}
            />
          ))}
      </div>

      {fieldErrors && fieldErrors.length > 0 && (
        <p className="pt-1 text-xs text-red-600">{fieldErrors[0]}</p>
      )}
    </div>
  );
};

export default InputField;
