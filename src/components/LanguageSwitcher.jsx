import React from 'react';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="d-flex  mt-2 ">
      {/* Moroccan Flag for Arabic */}
      <button className="btn ms-auto btn-link p-0" onClick={() => changeLanguage('ar')}>
        <Flag code="MAR" style={{ width: '35px', marginRight: '10px' }} alt="Moroccan Flag" />
      </button>

      {/* French Flag for French */}
      <button className="btn btn-link p-0" onClick={() => changeLanguage('fr')}>
        <Flag code="FRA" style={{ width: '35px', marginRight: '10px' }} alt="French Flag" />
      </button>

      {/* US Flag for English */}
      <button className="btn btn-link p-0" onClick={() => changeLanguage('en')}>
        <Flag code="USA" style={{ width: '40px', marginRight: '10px' }} alt="US Flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
