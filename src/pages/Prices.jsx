import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Pricing</h2>
      <div className="row">
        {/* Pricing for Small Cars */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img 
              src="path/to/small-car-image.jpg" 
              className="card-img-top" 
              alt="Small Car" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">السيارات الصغيرة</h5>
              <p className="card-text">مثالية للسيارات المدمجة</p>
              <h2 className="text-primary">$20</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">التنظيف الداخلي</li>
                <li className="list-group-item">Interior Vacuum</li>
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
              src="path/to/big-car-image.jpg" 
              className="card-img-top" 
              alt="Big Car" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">السيارات الكبيرة</h5>
              <p className="card-text">مثالية لسيارات الدفع الرباعي والشاحنات</p>
              <h2 className="text-primary">$30</h2>
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
              src="path/to/motorbike-image.jpg" 
              className="card-img-top" 
              alt="Motorbike" 
            />
            <div className="card-body text-center">
              <h5 className="card-title">دراجات نارية</h5>
              <p className="card-text">رعاية خاصة لدراجتك</p>
              <h2 className="text-primary">$15</h2>
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
