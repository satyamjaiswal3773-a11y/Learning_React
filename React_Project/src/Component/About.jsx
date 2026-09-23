import data from "./Data.jsx";
import "./About.css";

function About() {
  const aboutData = data.map((Data) => {
    return (
      <div className="about-card" key={Data.id}>
        <img src={Data.img} alt={Data.title} />
        <div className="cards-container">
          <h2>{Data.title}</h2>
          <p>{Data.description}</p>
        </div>
      </div>
    );
  });

  return <>{aboutData}</>;
}

export default About;
