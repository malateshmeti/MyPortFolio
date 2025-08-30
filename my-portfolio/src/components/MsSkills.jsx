// src/components/MsSkills.js
import React from "react";
import "./MsSkills.css";

const skills = [
  // Backend
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Spring Boot", icon: "/icons/springboot.png" },
  { name: "Hibernate", icon: "/icons/hibernate.png" },
  { name: "JDBC", icon: "/icons/jdbc.png" },
  // Databases
  { name: "SQL", icon: "/icons/sql.png" },
  // Frontend
  { name: "HTML5", icon: "/icons/html5.png" },
  { name: "CSS3", icon: "/icons/css3.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  // Tools
  { name: "Git", icon: "/icons/git.png" },
  { name: "Postman", icon: "/icons/postman.png" },
];


function MsSkills() {
  return (
    <section className="ms-skills" id="Skills">
      <div className="ms-skills-container">
        <h2 className="ms-skills-title">Tech Stack & Skills</h2>
        <div className="ms-skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="ms-skill-card">
              <img
                src={skill.icon}
                alt={skill.name}
                className="ms-skill-icon"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default MsSkills;
