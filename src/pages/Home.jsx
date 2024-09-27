

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
    <HomeWrapper style={{backgroundImage: `url("/assets/backgroundabout.jpg")`, backgroundRepeat:"no-repeat"}}>   
      <h1>مرحبا بكم في غسيل السيارات</h1>

<div>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/assets/manwash.jpg" className="d-block w-100 h-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/assets/smail.jpeg" className="d-block w-100 h-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/assets/smail.jpeg" className="d-block w-100 h-auto" alt="..."/>
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
      <div className="row   m-0 ">
        <div className="col-lg-3 col-md-6 m-auto "><img className='w-50  m-2' src="/assets/manTube.webp" alt="" />
        <br />
        <p>غسيل خارجي وداخلي شامل</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/washcar.webp" alt="" />
        <br />
        <p>إزالة الأوساخ العنيدة والبقع</p></div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/icon3.webp" alt="" />
        <br />
        <p>تلميع وتفصيل السيارة باستخدام أفضل المنتجات</p></div>
        <div className="col-lg-3 col-md-6 m-auto"><img className='w-50 m-2' src="/assets/icon4.webp" alt="" />
        <br />
        <p>خدمات إضافية مثل تنظيف المقاعد والفرش.</p></div>

      </div>
 
   
      <p className='text-light fs-2'>نحن نقدم أفضل خدمات غسيل السيارات في المدينة! يمكنناأن نأتي إلى منزلك لغسل سيارتك</p>
    </HomeWrapper>
  );
}

export default Home;
