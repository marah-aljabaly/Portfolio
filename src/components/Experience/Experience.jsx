import { useTranslation } from 'react-i18next';
import "./Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export default function Experience() {
  const {t , i18n} = useTranslation();

  return (
    <>
      <section className='experience-container'
        
      >
        <div className="title-container"
          id="experience"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out-sine"
          data-aos-once="true"
          data-aos-anchor-placement="top"
        >
          <div className="line"></div>
          <h2 className='title'>{t('Experience & Skills')}</h2>
        </div>
      
        <div className='exerience-content'>
          <div className='skills container'>
            {skills.map((skill, id) => {
              return (
                <div key={id} className='skill'
                  id="experience"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <div className='skillImageContainer'>
                    <img src={skill.imageSrc} alt={skill.title} />
                  </div>
                  <p className='skill-title'>{skill.title}</p>
                </div>
              );
            })}
          </div>

          <div className='history'>
            {history.map((historyItem, id) => {
              return (
                <div key={id} className='historyItem'
                  id="experience"
                  data-aos="slide-right"
                  data-aos-offset="200"
                  data-aos-delay="30"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out-sine"
                  data-aos-once="true"
                  data-aos-anchor-placement="top"
                >
                  <img
                    src={historyItem.imageSrc}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className='historyItemDetails'>
                    {
                      i18n.dir() === 'ltr' ?
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      : 
                      <h3>{`${historyItem.roleAr}`}</h3> 
                    }
                    {
                      i18n.dir() === 'ltr' ?
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      : 
                      <p>{`${historyItem.startDateAr} - ${historyItem.endDateAr}`}</p>
                    }
                    <ul>
                      {
                        i18n.dir() === 'ltr' ?
                          historyItem.experiences.map((experience, id) => {
                            return <li key={id}>{experience}</li>;
                          })
                        : 
                          historyItem.experiencesAr.map((experience, id) => {
                            return <li key={id}>{experience}</li>;
                          })
                      }
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}




// {
//   "skillName" : "HTML5, and CSS",
//   "ratting" : 95,
//   "categori" : "language"
// },
// {
//   "skillName" : "Bootstrap",
//   "ratting" : 85,
//   "categori" : "tools"
// },
// {
//   "skillName" : "MUI",
//   "ratting" : 75,
//   "categori" : "tools"
// },
// {
//   "skillName" : "JS",
//   "ratting" : 95,
//   "categori" : "language"
// },
// {
//   "skillName" : "React",
//   "ratting" : 80,
//   "categori" : "tools"
// },
// {
//   "skillName" : "React Bootstrap",
//   "ratting" : 85,
//   "categori" : "tools"
// },
// {
//   "skillName" : "Routes",
//   "ratting" : 80,
//   "categori" : "tools"
// },
// {
//   "skillName" : "REST API",
//   "ratting" : 80,
//   "categori" : "tools"
// },
// {
//   "skillName" : "i18next",
//   "ratting" : 80,
//   "categori" : "tools"
// },
// {
//   "skillName" : "JAVA",
//   "ratting" : 85,
//   "categori" : "language"
// },
// {
//   "skillName" : "PS",
//   "ratting" : 85,
//   "categori" : "tool"
// },  
// {
//   "skillName" : "JS libraries",
//   "libraries" : [
//     {"lib" : "React silck"},
//     {"lib" : "AOS"},
//     {"lib" : "Toastify"},
//     {"lib" : "Lottie"}
//   ],
//   "categori" : "tools"
// }