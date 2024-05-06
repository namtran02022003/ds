import React from "react";
import Header from "./headers/header";

const Layouts = ({children}: {children: React.ReactElement}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layouts