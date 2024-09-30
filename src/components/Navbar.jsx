import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundImage: `url("/assets/backgoundcarwash.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "left", WebkitBackgroundSize: "cover" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">{t('navbar.home')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{t('navbar.about')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">{t('navbar.contact')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/prices">{t('navbar.prices')}</Link>
              </li>
              <li className="nav-item ">
              <LanguageSwitcher />
              </li>
            
            </ul>
         
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
