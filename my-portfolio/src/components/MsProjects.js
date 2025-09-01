import React from "react";
import "./MsProjects.css";

const projects = [
  {
    title: "Smart Loan Management & Reporting System",
    tech: "Java, Spring Boot, Spring Security, Hibernate, MySQL, REST API, Git, JWT",
    points: [
      "Developed CRUD APIs for customer onboarding, loan creation, and repayment scheduling.",
      "Implemented loan eligibility, interest calculation, and EMI tracking features.",
      "Created secure role-based authentication and authorization using Spring Security & JWT.",
      "Optimized SQL queries and Hibernate mappings to improve transaction and report performance by ~30%.",
      "Built reporting APIs to provide real-time insights into loan performance, payment history, and outstanding balances.",
      "Added admin dashboards for monitoring loans, updating schedules, and generating summaries."
    ],
    github: "https://github.com/malateshmeti/BankingWebDev"
  },
  {
    title: "BringUp – Home Services Booking Platform",
    tech: "Java, Spring Boot, Spring Security, MySQL, REST API, Git, Postman",
    points: [
      "Developed a web application to connect end users with service agents (electricians, carpenters, plumbers, cleaners, painters).",
      "Built secure authentication and authorization features using Spring Security.",
      "Designed REST APIs for service booking, agent assignment, and job status tracking.",
      "Created database schema for users, services, and booking management with MySQL.",
      "Implemented role-based dashboards for customers (booking services) and agents (managing jobs).",
      "Tested and documented APIs using Postman to ensure reliability and usability."
    ],
    github: "https://github.com/malateshmeti/BringUp"
  }
];

function MsProjects() {
  // Handler for Project Website button
  const handleWebsiteClick = () => {
    alert("Please connect with the developer to know project details.");
  };

  return (
    <section className="ms-projects" id="projects">
      <div className="ms-projects-container">
        <h2 className="ms-projects-title">Projects</h2>

        <div className="ms-projects-list">
          {projects.map((project, index) => (
            <div key={index} className="ms-project-card">
              <h3 className="ms-project-title">{project.title}</h3>
              <p className="ms-project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </p>
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

                <button
                  className="ms-project-btn"
                  onClick={handleWebsiteClick}
                  style={{ marginLeft: "10px" }}
                >
                  🌐 Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MsProjects;
