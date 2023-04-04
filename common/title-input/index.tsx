import React, { memo } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

const TitleInput: React.FunctionComponent<InputProps> = memo(
  ({ placeholder, name, onChange, onPaste }) => {
    return (
      <input
        type="text"
        className="w-full text-3xl bg-transparent outline-0 py-8 leading-10"
        placeholder={placeholder}
        onChange={onChange}
        onPaste={onPaste}
        data-testid="input"
        name={name}
      />
    );
  }
);

TitleInput.displayName = "Input";

export default TitleInput;
