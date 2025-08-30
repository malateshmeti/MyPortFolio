import React from "react";
import "./MsProjects.css";

const projects = [
  {
    title: "Customer Loan Management System",
    tech: "Java, Spring Boot, Spring Security, Hibernate, MySQL, REST API, Git",
    points: [
      "Built CRUD APIs for customer onboarding and loan management.",
      "Implemented loan eligibility, interest calculation, and repayment scheduling.",
      "Created loan tracking APIs with payment history, outstanding balances, and EMI due dates.",
      "Added admin features for monitoring loans, updating repayment schedules, and generating summaries.",
      "Ensured data consistency with Hibernate ORM and optimized SQL schema design."
    ],
    github: "https://github.com/malateshmeti/BankingWebDev"
  },
  {
    title: "Real-time Financial Reporting Module",
    tech: "Java, Spring Boot, SQL, REST API",
    points: [
      "Designed reporting APIs to fetch real-time financial insights for business teams.",
      "Optimized SQL queries, reducing report generation time by ~30%.",
      "Improved decision-making by providing instant data visibility."
    ],
    github: "https://github.com/malateshmeti/BankingWebDev"
  },
  {
    title: "Authentication & Authorization Service",
    tech: "Spring Boot, Spring Security, JWT, MySQL",
    points: [
      "Developed secure role-based authentication and authorization modules.",
      "Integrated JWT tokens for session management and secure API access.",
      "Ensured 100% compliance with organizational security policies."
    ],
    github: "https://github.com/malateshmeti/BankingWebDev"
  }
];

function MsProjects() {
  return (
    <section className="ms-projects" id="projects">
      <div className="ms-projects-container">
        <h2 className="ms-projects-title">Projects</h2>

        <div className="ms-projects-list">
          {projects.map((project, index) => (
            <div key={index} className="ms-project-card">
              <h3 className="ms-project-title">{project.title}</h3>
              <p className="ms-project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
              <ul className="ms-project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="ms-project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ms-project-btn"
                >
                  🔗 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MsProjects;
