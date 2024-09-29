import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">الاسعار</h2>
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
              <h5 className="card-title">السيارات الصغيرة</h5>
              <p className="card-text">مثالية للسيارات المدمجة</p>
              <h2 style={{color:"#21A6E9"}} > 40
              درهم</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">التنظيف الداخلي</li>
                <li className="list-group-item">التنظيف الخارجي</li>
                <li className="list-group-item">تلميع الإطارات</li>
              </ul>
            </div>
            <div className="card-footer text-center">
            
            </div>
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
              <h5 className="card-title">السيارات الكبيرة</h5>
              <p className="card-text">مثالية لسيارات الدفع الرباعي والشاحنات</p>
              <h2 style={{color:"#21A6E9"}}>   80-100
              درهم</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">التنظيف الخارجي</li>
                <li className="list-group-item">التنظيف الداخلي</li>
                <li className="list-group-item">تلميع الإطارات</li>
              </ul>
            </div>
            <div className="card-footer text-center">
      
            </div>
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
              <h5 className="card-title">دراجات نارية</h5>
              <p className="card-text">رعاية خاصة لدراجتك</p>
              <h2 style={{color:"#21A6E9"}}>  15-20
              درهم</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">التنظيف الخارجي</li>
                <li className="list-group-item">تلميع الإطارات</li>
              </ul>
            </div>
            <div className="card-footer text-center">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
