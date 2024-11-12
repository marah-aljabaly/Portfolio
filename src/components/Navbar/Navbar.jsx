import "../Navbar/Navbar.css"
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../slice/themeSlice.js';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { useEffect } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const nav = document.getElementsByClassName('navbar')
  console.log(nav);

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    if (nav) {
      nav.setAttribute('data-bs-theme', theme); 
    }
  }, [theme]);
  

  return (
    <>
      <nav className={`navbar navbar-expand-md container bg-body-none -2`}>
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <span className="logoChar">{t('M')}</span>{t('arah')}
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar" 
            // aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`offcanvas opacity-75 ${i18n.dir() === 'rtl' ? 'offcanvas-start' : 'offcanvas-end'}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> <span className="logoChar">{t('M')}</span>{t('arah')}</h5>
              <button type="button" className={`btn-close ${i18n.dir() === 'rtl' ? 'me-auto ms-0' : 'ms-auto me-0'}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className={`navbar-nav text-center ${i18n.dir() === 'rtl' ? 'ms-0 me-auto' : 'me-0 ms-auto'}`}>
              <a className="nav-link" href="#about">{t('About')}</a>
              <a className="nav-link" href="#experience">{t('Experience')}</a>
              <a className="nav-link" href="#projects">{t('Projects')}</a>
              <a className="nav-link" href="#contact">{t('Contact')}</a>

              <button className={`lang py-1 px-2 mb-2 ${i18n.dir() === 'rtl' ? 'ms-0 me-2' : 'me-0 ms-2'}`} id="lang"
                onClick={() => {
                  const button = document.getElementById("lang");
                  if (button.innerHTML === "EN") {
                    button.innerHTML = "AR";
                    i18n.changeLanguage('ar');
                    window.document.dir = i18n.dir("ar");
                  } else {
                    button.innerHTML = "EN";
                    i18n.changeLanguage('en');
                    window.document.dir = i18n.dir("en");
                  }
                }}
              >
                EN
              </button>

              <button className={`theme-icon py-1 px-2 mb-2 ${i18n.dir() === 'rtl' ? 'ms-0 me-2' : 'me-0 ms-2'}`}
                onClick={() => dispatch(toggleTheme())}
              >
                {theme === 'light' ? <MdSunny /> : <FaMoon />}
              </button>

            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
