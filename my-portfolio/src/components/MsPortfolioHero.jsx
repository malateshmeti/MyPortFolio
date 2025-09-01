import React from "react";
import "./MsPortfolioHero.css";

const MsPortfolioHero = () => {
  // Place your resume in public/resume.pdf
  const resumeUrl = "/Malatesh_SDE_E1.pdf";

  return (
    <>
      {/* Header / Navbar */}
      <header className="ms-header">
        <div className="ms-header-container">
          <div className="ms-header-left">
            <h2>Malatesh Meti</h2>
          </div>
          <nav className="ms-header-right">
            <a href="#Skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="ms-hero">
        <div className="ms-hero-grid">
          <div className="ms-left">
            <h1 className="ms-title">
              Hey, I'm Malatesh <span role="img" aria-label="waving"></span>
            </h1>

            <p className="ms-desc">
              Backend Developer with almost 2 years of experience in building scalable financial solutions using Java Spring Boot and SQL. Skilled in REST API development, 
              system optimisation, and efficient database management. <br/>
              Currently expanding frontend skills to deliver full-stack solutions. Passionate about creating robust, user-friendly applications that drive business impact.
            </p>
          </div>

          <div className="ms-card">
            <div className="ms-card-inner">
              <img src="/MyImage4.jpeg" alt="profile dummy" className="ms-card-img" />

              <div className="ms-card-overlay">
                <div className="ms-card-text">
                  <h3>Malatesh Meti</h3>
                  <p>Associate Software Development Engineer - E1</p>
                </div>

               <div className="ms-card-actions">
                  <a
                    className="ms-btn"
                    href={resumeUrl}
                    download="Malatesh_SDE_E1.pdf"
                  >
                    Resume
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MsPortfolioHero;
