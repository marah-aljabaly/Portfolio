// import heroImage from "../../../assets/hero/heroImage.png";
import { useTranslation } from "react-i18next";
import heroImage from "/image/hero/flowerMain.png";
import devImage from "/image/hero/dev.png";
import "./Hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { useSelector} from 'react-redux';

export default function Hero() {
  const {t, i18n} = useTranslation();
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <>
      <section className='hero-container'>
        <div className="hero-container" >
          <div className='hero-content'
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out-sine"
          >
            <h1 className={`hero-title ${theme}`}>{t("Hi, I'm Marah")} </h1>
            <p className='hero-description'>
              {t("I'm a Front-End developer using React.")} <br /> 
            </p>
            <a href="mailto:aljabalymarah@gmail.com" className='hero-contactBtn'>
              {t('Contact Me')}
            </a>
          </div>
          <img
            src={devImage}
            alt="Hero image of me"
            className='hero-heroImg'
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in-out-sine"
          />
        </div>
        <div id='topBlur' className={`${theme}`} />
        <div id='bottomBlur' className={`${theme}`} />
      </section>
    </>
  )
}
