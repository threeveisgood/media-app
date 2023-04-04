import * as React from "react";

interface ILabelProps {
  text: string;
}

const Label: React.FunctionComponent<ILabelProps> = ({ text }) => {
  return <label className="pb-2.5 font-bold block">{text}</label>;
};

export default Label;
