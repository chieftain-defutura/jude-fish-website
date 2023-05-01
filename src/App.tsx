import React from "react";
import Footer from "./components/Footer";
import AboutCompany from "./components/AboutCompany";
import WpbWrapper from "./components/wpbWrapper";

const App: React.FC = () => {
  return (
    <>
      <WpbWrapper />
      <AboutCompany />
      <Footer />
    </>
  );
};

export default App;
