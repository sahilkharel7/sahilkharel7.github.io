import { MdArrowOutward } from "react-icons/md";
import "./styles/Publications.css";

const publications = [
  {
    title:
      "A High-Resolution (1-km) Ecological Niche Model for Dengue Vectors in South Asia",
    authors: "Mainali, R. & Kharel, S.",
    venue: "Zenodo — Montgomery College",
    year: "2025",
    link: "https://zenodo.org/records/18829517",
    doi: "10.5281/zenodo.18829517",
  },
  {
    title:
      "Medicaid Expansion and the Health Impact of COVID-19 on Low-Income Young Adults: Evidence from a Triple-Difference Analysis",
    authors: "Kharel, S.",
    venue: "Working Paper",
    year: "2026",
    link: "https://docs.google.com/document/d/19kxJedzjqogKCzXKzLTTU4KY1zP_kE6O_LI8xv9lHho/edit?usp=sharing",
  },
];

const Publications = () => {
  return (
    <div className="publications-section section-container">
      <div className="publications-container">
        <h2>
          Publications <span>&</span>
          <br /> Research
        </h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
              data-cursor="disable"
            >
              <div className="publication-meta">
                <span className="publication-year">{pub.year}</span>
                <span className="publication-venue">{pub.venue}</span>
              </div>
              <div className="publication-body">
                <h3>{pub.title}</h3>
                <p className="publication-authors">{pub.authors}</p>
                {pub.doi && (
                  <p className="publication-doi">DOI: {pub.doi}</p>
                )}
              </div>
              <div className="publication-arrow">
                <MdArrowOutward />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
