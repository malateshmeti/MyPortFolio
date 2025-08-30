import React from "react";
import MsPortfolioHero from "./components/MsPortfolioHero";
import MsSkills from "./components/MsSkills"; // ✅ new import
import MsExperience from "./components/MsExperience";
import MsProjects from "./components/MsProjects";
import MsContactForm from "./components/MsContactForm"; // ✅ new import

import "./App.css";

function App() {
  return (
    <div className="App">
      <MsPortfolioHero />
      <MsSkills />   
      <MsExperience /> 
      <MsProjects /> 
      <MsContactForm />  {/* ✅ added contact section */}
    </div>
  );
}


export default App;
