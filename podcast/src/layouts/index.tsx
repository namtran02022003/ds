import React from "react";
import Header from "./headers/header";
import { NavBar } from "./navBars/NavBar";
import FloatingSidebar from "./FloatingSidebar";

const Layouts = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <NavBar />
      <img src="./imgs/slideTop.svg" alt="slide" />
      <FloatingSidebar />
      {children}
    </>
  );
};
export default Layouts;
