import { CloudUpload, Eye, EyeOff, LucideIcon } from "lucide-react";
import { useRef } from "react";

type InputFieldProps = {
  type: string;
  name?: string;
  text: string;
  placeholder?: string;
  inputValue: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    productName?: string;
    productCategory?: string;
    productLocation?: string;
    productImage?: string | string[];
    productAmount?: string;
  };
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTextareaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleTogglePasswordVisibility?: () => void;
  Component?: LucideIcon;
  passwordVisibility?: boolean;
  fieldErrors?: string[] | null;
  options?: string[];
  allowMultiple?: boolean;
};

const InputField = ({
  type,
  name,
  text,
  placeholder,
  inputValue,
  handleChange,
  handleSelectChange,
  handleTextareaChange,
  handleTogglePasswordVisibility,
  Component,
  passwordVisibility,
  options = [],
  fieldErrors,
  allowMultiple = false,
}: InputFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const currentValue =
    name && name in inputValue ? inputValue[name as keyof typeof inputValue] || "" : "";

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click();
  };

  if (type === "select" && options.length > 0) {
    return (
      <div>
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-black"
        >
          {text}
        </label>

        <div className="rounded-round focus-within:border-tertiaryColor flex items-center gap-2 border border-gray-300 bg-white px-4 py-2">
          <select
            name={name}
            id={name}
            className="rounded-round h-8 w-full bg-transparent outline-none"
            value={inputValue[name as keyof typeof inputValue] || ""}
            onChange={handleSelectChange}
          >
            <option
              value=""
              className="bg-primaryColor hover:bg-primaryColor/90 text-white"
            >
              Select an option
            </option>

            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-primaryColor hover:bg-primaryColor/90 text-white"
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        {fieldErrors && fieldErrors.length > 0 && (
          <p className="pt-1 text-xs text-red-600">{fieldErrors[0]}</p>
        )}
      </div>
    );
  }

  if (type === "file") {
    return (
      <div>
        <label
          htmlFor={name}
          className="mb-2 block w-max text-sm font-medium text-black"
        >
          {text}
        </label>

        <div
          className="rounded-round focus-within:border-tertiaryColor relative flex h-full min-h-[150px] w-full flex-col items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-4"
          onClick={handleOpenFilePicker}
        >
          <input
            ref={fileInputRef}
            type="file"
            id={name}
            multiple={allowMultiple}
            onChange={handleChange}
            className="rounded-round absolute inset-0 h-8 w-full bg-transparent opacity-0 outline-none"
          />

          <div className="flex flex-col items-center justify-center gap-1">
            <CloudUpload className="text-primaryColor size-10" />

            <p className="text-secondaryColor text-sm">Choose a file</p>

            <p className="text-tertiaryColor text-xs">
              {Array.isArray(inputValue.productImage)
                ? inputValue.productImage.join(", ")
                : inputValue.productImage || currentValue || "No file selected"}
            </p>
          </div>
        </div>

        {fieldErrors && fieldErrors.length > 0 && (
          <p className="pt-1 text-xs text-red-600">{fieldErrors[0]}</p>
        )}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div>
         <label
          htmlFor={name}
          className="mb-2 block w-max text-sm font-medium text-black"
        >
          {text}
        </label>

        <div className="rounded-round has-[textarea:focus]:border-tertiaryColor flex items-center gap-2 border border-gray-300 bg-white px-4 py-2">
          <textarea name={name} id={name} value={currentValue} onChange={handleTextareaChange} placeholder={placeholder} className="rounded-round h-32 w-full bg-transparent outline-none"></textarea>
        </div>

        {fieldErrors && fieldErrors.length > 0 && (
          <p className="pt-1 text-xs text-red-600">{fieldErrors[0]}</p>
        )}
      </div>
    )
  }

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
          value={currentValue}
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
