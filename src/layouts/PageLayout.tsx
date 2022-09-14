import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Temp from "../components/Temp";

interface Props {
  children?: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {children}
      {/* <Footer></Footer> */}
      {/* <Temp></Temp> */}
    </>
  );
};

export default PageLayout;
