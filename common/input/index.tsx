import * as React from "react";

interface InputProps {}

const Input: React.FunctionComponent<InputProps> = (props) => {
  return (
    <input
      className="text-3xl bg-transparent outline-0 px-5 py-8"
      placeholder="제목을 입력하세요"
    />
  );
};

export default Input;
