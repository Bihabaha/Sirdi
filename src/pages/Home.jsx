

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
      <h1 className='text-light'>مرحبا بكم في غسيل السيارات</h1>

<div>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide "></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/manTube.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>غسيل خارجي وداخلي شامل</h5>
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/washcar.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>تلميع وتفصيل السيارة باستخدام أفضل المنتجات</h5>
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/icon3.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5> إزالة الأوساخ العنيدة والبقع</h5>
       
      </div>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

<h2 className='text-light mt-3'>خدماتنا</h2>
      <div className="row   m-0 ">
        <div className="col-lg-3 col-md-6 m-auto "><img className='w-50  m-2' src="/assets/manTube.webp" alt="" />
        <br />
        <h5>غسيل خارجي وداخلي شامل</h5>
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
