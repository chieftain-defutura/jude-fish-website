import React from "react";
import Footer from "./components/Footer";
import AboutCompany from "./components/AboutCompany";
import WpbWrapper from "./components/wpbWrapper";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <WpbWrapper />
      <AboutCompany />
      <Footer />
    </>
  );
};

export default App;
