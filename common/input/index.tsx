import * as React from "react";

interface IInputProps {
  size: "sm" | "md" | "lg";
}

const getSizeClass = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-md";
    case "lg":
      return "text-lg";
  }
};

const Input: React.FunctionComponent<IInputProps> = (props) => {
  return (
    <input
      type="text"
      className="inline-block text-sm bg-slate-200 dark:bg-slate-700 outline-0 py-1.5 px-2  rounded-sm"
      //onChange={handleChange}
      data-testid="input"
    />
  );
};

export default Input;
