import { useMemo } from "react";

interface IInputProps {
  size?: "sm" | "md" | "lg";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

const getSizeClass = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "w-52";
    case "md":
      return "w-72";
    case "lg":
      return "w-96";
  }
};

const BASE_BUTTON_CLASSES =
  "inline-block text-sm bg-slate-200 dark:bg-slate-700 h-9 outline-0 py-1.5 px-2.5 rounded-sm";

const Input: React.FunctionComponent<IInputProps> = ({
  size = "md",
  onChange,
  onPaste,
}) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClass(size);

    return sizeClass;
  }, [size]);

  return (
    <input
      type="text"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      onChange={onChange}
      onPaste={onPaste}
      data-testid="input"
    />
  );
};

export default Input;
