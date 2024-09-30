import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{t('pricing.title')}</h2>
      <div className="row">
        {/* Pricing for Small Cars */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img 
              src="/assets/small card.png" 
              className="card-img-top" 
              alt="Small Car" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">{t('pricing.small_cars_title')}</h5>
              <p className="card-text">{t('pricing.small_cars_description')}</p>
              <h2 style={{color:"#21A6E9"}}>{t('pricing.small_cars_price')}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{t('pricing.internal_cleaning')}</li>
                <li className="list-group-item">{t('pricing.external_cleaning')}</li>
                <li className="list-group-item">{t('pricing.tyre_polish')}</li>
              </ul>
            </div>
            <div className="card-footer text-center"></div>
          </div>
        </div>

        {/* Pricing for Big Cars */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img 
              src="/assets/bigcars.jpg" 
              className="card-img-top" 
              alt="Big Car" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">{t('pricing.big_cars_title')}</h5>
              <p className="card-text">{t('pricing.big_cars_description')}</p>
              <h2 style={{color:"#21A6E9"}}>{t('pricing.big_cars_price')}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{t('pricing.external_cleaning')}</li>
                <li className="list-group-item">{t('pricing.internal_cleaning')}</li>
                <li className="list-group-item">{t('pricing.tyre_polish')}</li>
              </ul>
            </div>
            <div className="card-footer text-center"></div>
          </div>
        </div>

        {/* Pricing for Motorbikes */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img 
              src="/assets/moto.jpg" 
              className="card-img-top" 
              alt="Motorbike" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">{t('pricing.motorbikes_title')}</h5>
              <p className="card-text">{t('pricing.motorbikes_description')}</p>
              <h2 style={{color:"#21A6E9"}}>{t('pricing.motorbikes_price')}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{t('pricing.external_cleaning')}</li>
                <li className="list-group-item">{t('pricing.tyre_polish')}</li>
              </ul>
            </div>
            <div className="card-footer text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
