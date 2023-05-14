import React from "react";
import Footer from "./components/Footer";
import AboutCompany from "./components/AboutCompany";
import WpbWrapper from "./components/wpbWrapper";
import Header from "./components/Header";
import FishEgg from "./components/FishEgg";
import QualityMonitoring from "./components/QualityMonitoring";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <WpbWrapper />
      <AboutCompany />
      <FishEgg />
      <QualityMonitoring />
      <WpbWrapper />
      <Footer />
    </>
  );
};

export default App;
