import React from "react";
import "./MsExperience.css";

const experiences = [
  {
    role: "Associate Software Development Engineer – E1",
    company: "Craft Silicon Asia, Bengaluru",
    duration: "Nov 2023 – Present (1.11 Years)",
    skills: "Java, Spring Boot, Spring Security, Hibernate, REST API, SQL, MySQL, Git, Postman",
    points: [
      "Developed and secured REST APIs for financial operations (credit, debit, EMI) using Spring Boot & Spring Security.",
      "Automated loan installment scheduling, reducing manual effort by 90%.",
      "Optimized SQL queries and stored procedures, improving transaction performance by 30%.",
      "Collaborated with cross-functional teams to deliver scalable and reliable financial solutions."
    ]
  },
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
