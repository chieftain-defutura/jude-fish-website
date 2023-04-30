import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
};

export default App;
