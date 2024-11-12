import { useTranslation } from 'react-i18next';
import './About.css';
import aboutImage from "/image/about/aboutImage.png";
import { FaLaptop } from "react-icons/fa";
import { FaCode } from "react-icons/fa"; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function About() {
  const {t , i18n} = useTranslation();

  // لو فيه تنسيقات مشتركة بحطهم في AOS.int()
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // مدة التأثيرات بالمللي ثانية
  //     offset: 100,    // إزاحة بدء التأثيرات
  //     easing: 'ease-in-out', // طريقة التلاشي
  //   });
  // }, []); 
  
  return (
    <>
      <section className='about-container'
        id="about"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="30"
        data-aos-duration="800"
        data-aos-easing="ease-in-out-sine"
        // data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top"
      >
        <div className='title-container'>
          <div className='line'></div>
          <h2 className='title'>{t('About')}</h2>
        </div>
      
        <div className='content'>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className='aboutImage'
          />
          <ul className='aboutItems'>
            <li className='aboutItem'>
              <FaLaptop className='icon'/>
              <div className='aboutItemText'>
                <h3>{t('Computer Engineer')}</h3>
                <p>
                  {t("I'm good in JAVA and OOP, I consider myself to be a creative and leading person.")}
                </p>
              </div>
            </li>
            <li className='aboutItem'>
              <FaCode className='icon' />
              <div className='aboutItemText'>
                <h3>{t('React Frontend Developer')}</h3>
                <p>
                  {t("I'm a frontend developer with experience in building responsive and optimized sites, and i can handle API.")}
                </p>
              </div>
            </li>
            {/* <li className='aboutItem'>
              <MdDesignServices className='icon'/>
              <div className='aboutItemText'>
                <h3>Graphic Designer</h3>
                <p>
                  I make fun and attractive designs in the field of social media and ads.
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  )
}

