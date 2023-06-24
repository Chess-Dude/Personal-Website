import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import VolunteerExperience from "./components/VolunteerExperience";
import Extracurriculurs from "./components/Extracurriculurs";
import Certifications from "./components/Certifications";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <WorkExperience />
      <VolunteerExperience />
      <Extracurriculurs />            
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}