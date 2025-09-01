import React from "react";
import "./MsExperience.css";

const experiences = [
  {
    role: "Associate Software Development Engineer – E1",
    company: "Craft Silicon Asia, Bengaluru",
    duration: "Nov 2023 – Present (1.11 Years)",
    skills: "SQL Server, Database Design, Query Optimization, Stored Procedures, ETL, Performance Tuning, Java, Spring Boot, REST API, Git, MySQL, Postman",
    points: [
      "Core Work (SQL Server):",
      "- Specialized in SQL Server development, focusing on query optimization, stored procedures, and database performance tuning.",
      "- Designed and managed efficient database schemas to support high-volume financial transactions.",
      "- Built and optimized ETL workflows for seamless data processing and reporting.",
      "- Collaborated with cross-functional teams to ensure reliable, secure, and scalable financial data systems.",
      "",
      "Additional Projects (Skill Development):",
      "- Developed and secured REST APIs for financial operations using Spring Boot & Spring Security.",
      "- Built loan management features like EMI scheduling and automated payment tracking.",
      "- Practiced clean code, version control (Git), and API testing (Postman) to simulate real-world development workflows.",
      "- Strengthened full-stack foundation by integrating backend APIs with frontend prototypes."
    ]
  }
,
  {
    role: "Salesforce Developer Intern",
    company: "Utilitarians Labs, Bengaluru",
    duration: "Oct 2023 (1 Month)",
    skills: "Salesforce, Apex, SOQL, Lightning Components",
    points: [
      "Gained hands-on experience in customizing Salesforce objects and workflows.",
      "Developed basic Apex classes and SOQL queries for data handling.",
      "Worked with Lightning components to enhance UI features."
    ]
  }
];

function MsExperience() {
  return (
    <section className="ms-experience" id="experience">
      <div className="ms-experience-container">
        <h2 className="ms-experience-title">Experience</h2>

        <div className="ms-experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="ms-experience-card">
              <h3 className="ms-experience-role">{exp.role}</h3>
              <p className="ms-experience-company">
                {exp.company} <span className="ms-experience-duration">({exp.duration})</span>
              </p>
              <p className="ms-experience-skills"><strong>Skills:</strong> {exp.skills}</p>
              <ul className="ms-experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MsExperience;
