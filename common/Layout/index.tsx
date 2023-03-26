import * as React from "react";
import Header from "./header";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
