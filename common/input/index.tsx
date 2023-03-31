import React, { memo, useCallback } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<InputProps> = memo(
  ({ placeholder, name, onChange }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e);
        }
      },
      [onChange]
    );

    return (
      <input
        type="text"
        className="w-full text-3xl bg-transparent outline-0 py-8"
        placeholder={placeholder}
        onChange={handleChange}
        data-testid="input"
        name={name}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
