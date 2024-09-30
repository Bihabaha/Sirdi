import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const HomeWrapper = styled.div`
  text-align: center;
  background-color: #87ceeb;
  min-height: 100vh;
  padding: 50px;
`;

function Home() {
  const { t } = useTranslation();

  return (
    <HomeWrapper
      style={{
        backgroundImage: `url("/assets/backgroundabout.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-light">{t('welcome')}</h1>
      <div className="container-fluid">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video w-100 src="/assets/service2.mp4" controls></video>
            </div>
            <div className="carousel-item">
              <video w-100 src="/assets/services.mp4" controls></video>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <h2 className="text-light mt-3">{t('services')}</h2>
      <div className="row m-0 ">
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/manTube.webp" alt="" />
          <p>{t('service1')}</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/washcar.webp" alt="" />
          <p>{t('service2')}</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/icon3.webp" alt="" />
          <p>{t('service3')}</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/icon4.webp" alt="" />
          <p>{t('service4')}</p>
        </div>
      </div>

      <p className="text-light fs-2">{t('best_service')}</p>
    </HomeWrapper>
  );
}

export default Home;
