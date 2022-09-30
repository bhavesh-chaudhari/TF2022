import React, { ReactNode} from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => {
    return import("../components/Navbar");
  });

const Footer = dynamic(
  () => {
    return import("../components/Footer");
  }
);

interface Props {
  children?: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default PageLayout;
