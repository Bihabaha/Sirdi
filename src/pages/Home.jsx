import styled from "styled-components";

const HomeWrapper = styled.div`
  text-align: center;
  background-color: #87ceeb; /* Sky Blue background */
  min-height: 100vh;
  padding: 50px;
`;

function Home() {
  return (
    <HomeWrapper
      style={{
        backgroundImage: `url("/assets/backgroundabout.jpg")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-light">مرحبا بكم في غسيل السيارات</h1>
      <div className="container-fluid">
     
        <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <video w-100 src="/assets/service2.mp4" controls></video>
    </div>
    <div className="carousel-item">
    <video w-100 src="/assets/service2.mp4" controls></video>
    </div>
    <div className="carousel-item">
    <video w-100 src="/assets/service2.mp4" controls></video>
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

      <h2 className="text-light mt-3">خدماتنا</h2>
      <div className="row m-0 ">
        <div className="col-lg-3 col-md-6 m-auto ">
          <img className="w-50  m-2" src="/assets/manTube.webp" alt="" />
          <br />
          <h5>غسيل خارجي وداخلي شامل</h5>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/washcar.webp" alt="" />
          <br />
          <p>إزالة الأوساخ العنيدة والبقع</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/icon3.webp" alt="" />
          <br />
          <p>تلميع وتفصيل السيارة باستخدام أفضل المنتجات</p>
        </div>
        <div className="col-lg-3 col-md-6 m-auto">
          <img className="w-50 m-2" src="/assets/icon4.webp" alt="" />
          <br />
          <p>خدمات إضافية مثل تنظيف المقاعد والفرش.</p>
        </div>
      </div>

      <p className="text-light fs-2">
        نحن نقدم أفضل خدمات غسيل السيارات في المدينة! يمكنناأن نأتي إلى منزلك
        لغسل سيارتك
      </p>
    </HomeWrapper>
  );
}

export default Home;
