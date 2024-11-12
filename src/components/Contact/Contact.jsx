import { useTranslation } from 'react-i18next';
import './Contact.css'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export const Contact = () => {
  const {t , i18n} = useTranslation();

  return (
    <footer id="contact" className='footer-container'>
      <div className="title-container">
        <div className="line"></div>
        <h2 className='title'>{t('Contact')}</h2>
      </div>

      <div className='footer-links'>
        <div className="footer-link">
         <a href="mailto:aljabalymarah@gmail.com" target='_blank'><MdOutlineMarkEmailUnread  className="contact-icon"/></a>
        </div>
        <div className="footer-link">
         <a href="https://www.linkedin.com/in/marahaljabaly" target='_blank'><FaLinkedin className="contact-icon"/></a>
        </div>
        <div className="footer-link">
         <a href="https://www.github.com/marah-aljabaly" target='_blank'><FaGithubSquare className="contact-icon"/></a>
        </div>
      </div>
      <p  className='footer-text'>{t('Feel free to reach out!')}</p>

      <p className="c text-center"> All Rights Reserved to Marah Aljabaly &copy; 2024</p>
    </footer>
  );
};
