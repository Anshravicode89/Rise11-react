import React from "react";
import NavigationMenu from "./components/NavigationMenu";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";
import "./App.css";
import UploadSection from "./components/UploadSection";

const App = () => {
  return (
    <div className="app">
      <NavigationMenu />
      <div className="main-content">
        <ProgressBar />
        <ClaimForm />
        <UploadSection />
      </div>
    </div>
  );
};

export default App;
