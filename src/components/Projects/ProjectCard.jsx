import "./ProjectCard.css";
import projects from "../../data/projects.json";
import { TbHandClick } from "react-icons/tb";
import { FaRegFileCode } from "react-icons/fa";

export default function ProjectCard(props) {
  // استخراج البيانات من props
  const { title, imageSrc, description, skills, demo, source } = props;
  console.log(props);

  return (
    <div className="projectCard"
      data-aos="zoom-out"
      data-aos-offset="200" 
      data-aos-easing="ease-out-cubic"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="image-container shadow">
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className="image"
        />
        <div className="overlay">
          <h3 className="project-title">{title}</h3>
          <div className="links">
            <a href={demo} target="_blank" className="link">
              <TbHandClick />
              Demo
            </a>
            <a href={source}  target="_blank" className="link">
              <FaRegFileCode />
              Source
            </a>
          </div>
        </div>
      </div>
      
      
      {/* <p className="project-description">{description}</p> */}
      {/* <ul className="skills">
        {skills.map((skill, id) => (
          <li key={id} className="skill">
            {skill}
          </li>
        ))}
      </ul> */}
      
    </div>
  );
}
