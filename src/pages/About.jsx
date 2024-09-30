import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: "#87ceeb", opacity: 0.8, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "40px" }}>
      <h1 className="text-end text-white">{t('about.title')}</h1>
      <p className="fs-3 text-end">{t('about.content')}</p>

      <h2 className="text-end text-white">{t('about.what_makes_us_special.title')}</h2>
      <p className="fs-3 text-end">{t('about.what_makes_us_special.content')}</p>

      <h2 className="text-end text-white">{t('about.convenience_title')}</h2>
      <p className="fs-3 text-end">{t('about.convenience_content')}</p>

      <h2 className="text-end text-white">{t('about.value_title')}</h2>
      <p className="fs-3 text-end">{t('about.value_content')}</p>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-75" src="/assets/profile.jpeg" alt="profile"/>
          </div>
          <div className="col-lg-6">
            <h2 className="text-end text-white">{t('about.what_we_offer_title')}</h2>
            <ul className="fs-3 text-end list-unstyled">
              <li>{t('about.services.0')}</li>
              <li>{t('about.services.1')}</li>
              <li>{t('about.services.2')}</li>
              <li>{t('about.services.3')}</li>
            </ul>
            <h2 className="text-end text-white">{t('about.why_choose_us_title')}</h2>
            <p className="fs-3 fw-bold text-end">{t('about.why_choose_us_description')}</p>
            <ul className="fs-3 list-unstyled text-end">
              <li>{t('about.advantages.0')}</li>
              <li>{t('about.advantages.1')}</li>
              <li>{t('about.advantages.2')}</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="fs-3 fw-bold text-info text-light">{t('about.contact_us_message')}</p>
    </div>
  );
};

export default About;
