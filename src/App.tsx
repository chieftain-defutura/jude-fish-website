import React from "react";
import Footer from "./components/Footer";
import AboutCompany from "./components/AboutCompany";
import WpbWrapper from "./components/wpbWrapper";
import FishEgg from "./components/FishEgg";
import QualityMonitoring from "./components/QualityMonitoring";

const App: React.FC = () => {
  return (
    <>
      <AboutCompany />
      <FishEgg />
      <QualityMonitoring />
      <WpbWrapper />
      <Footer />
    </>
  );
};

export default App;
