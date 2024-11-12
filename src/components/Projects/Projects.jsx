import { useTranslation } from 'react-i18next';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard"; 
import './Projects.css'

export default function Projects() {
  const {t , i18n} = useTranslation();

  return (
    <section className='project-container'
      id="projects"
      data-aos="fade-down"
      data-aos-offset="200" 
      data-aos-easing="ease-out-cubic"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="title-container">
        <div className="line"></div>
        <h2 className='title'>{t('Projects')}</h2>
      </div>
      
      <div className='projects'>
        {projects.map((project, id) => {
          return <ProjectCard key={id} {...project} />;  // تمرير project كـ props
        })}
      </div>
    </section>
  );
}
