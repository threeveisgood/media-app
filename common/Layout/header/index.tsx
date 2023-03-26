import * as React from "react";
import SwitchMode from "./SwitchMode";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <nav>
      <SwitchMode />
    </nav>
  );
};

export default Header;
