import React from "react";
import Header from "./headers/header";
import { NavBar } from "./navBars/NavBar";
import slideImg from "@/assets/imgs/slideTop.svg";
const Layouts = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <NavBar />
      <img src={slideImg} alt="slide" />
      {children}
    </>
  );
};
export default Layouts;
