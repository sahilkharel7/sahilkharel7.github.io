import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Sriyantra AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Processed EEG and BCI time-series data, built analysis pipelines
              for cognitive state patterns, fine-tuned local LLMs for
              task-specific deployment, and developed web and mobile apps
              to surface AI-driven insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Peer Tutor, Economics & Accounting</h4>
                <h5>Montgomery College</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Provide one-on-one and group tutoring in intermediate Accounting
              and Economics courses, translating complex financial principles
              and quantitative methods into practical, student-friendly lessons.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer Intern</h4>
                <h5>NeuralSense AIML</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-grade AI agents that automate large-scale
              ecological data extraction, designing scalable data pipelines
              with validation and traceability, and developing full-stack
              applications for automated database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
