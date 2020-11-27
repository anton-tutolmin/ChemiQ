import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./App.scss";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container main"></div>
      <Footer />
    </>
  );
};
