import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  text-align: center;
  background-color: #87ceeb; /* Sky Blue background */
  min-height: 100vh;
  padding: 50px;
`;


;

function Home() {
  return (
    <HomeWrapper style={{backgroundImage: `url("/assets/homebackground.webp")`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>   
      <h1>مرحبا بكم في غسيل السيارات</h1>
 
      <div className="row   m-0 ">
        <div className="col-lg-3 col-md-6 m-auto "><img className='w-50  m-2' src="/assets/manTube.webp" alt="" /></div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/washcar.webp" alt="" /></div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/icon3.webp" alt="" /></div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/icon4.webp" alt="" /></div>

      </div>
   
   
      <p className='text-light fs-2'>نحن نقدم أفضل خدمات غسيل السيارات في المدينة! يمكنناأن نأتي إلى منزلك لغسل سيارتك</p>
    </HomeWrapper>
  );
}

export default Home;
