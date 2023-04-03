import * as React from "react";

interface ILabelProps {
  text: string;
}

const Label: React.FunctionComponent<ILabelProps> = ({ text }) => {
  return (
    <label className="pr-4 font-bold font-bold min-w-[8rem] inline-block">
      {text}
    </label>
  );
};

export default Label;
