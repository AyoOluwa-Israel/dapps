import { IInputProps } from "@/types/componentInterface";
import { ChangeEvent } from "react";

const PrimaryInput: React.FC<IInputProps> = ({ name, onBlur, value, placeholder, label, error, type, onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // If the type is "number," allow only numeric characters
    if (type === "tel") {
      inputValue = inputValue.replace(/[^0-9]/g, "");
    } else if (type === "pin") {
      const numericInput = inputValue.replace(/[^0-9]/g, "");

      inputValue = numericInput.slice(0, 4);
    }

    const customEvent = {
      target: {
        name,
        value: inputValue,
      },
    };

    // Call the onChange callback with the custom event
    onChange(customEvent as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm text-darkGrey">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleInputChange}
        className={`border-b-[1px] border-borderGrey placeholder:text-white bg-transparent h-[40px] text-xs placeholder:text-sm pl-4 outline-none focus:border-darkGreen transition-all duration-300 ${
          error ? "border-red-500 bg-errorBg" : ""
        }`}
      />
      {error && <small className="text-red-500 text-xs transition-all duration-300">{error}</small>}
    </div>
  );
};

export default PrimaryInput;
