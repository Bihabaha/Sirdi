import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' }); // State for alert

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      date: startDate.toLocaleDateString(),
      time,
      phoneNumber,
    };

    emailjs
      .send('Ismailaytali', 'template_5f8mp4e', templateParams, 'qx8iCpuLb7AezUF90')
      .then(
        (result) => {
          setAlert({ message: 'تم الحجز بنجاح!', type: 'success' }); // Success alert
          resetForm(); // Reset the form
        },
        (error) => {
          console.log('Error:', error);
          setAlert({ message: 'Error sending booking. Please try again.', type: 'error' }); // Error alert
        }
      );
  };

  const resetForm = () => {
    setStartDate(new Date());
    setTime('');
    setName('');
    setEmail('');
    setMessage('');
    setPhoneNumber('');
  };

  return (
    <div className="container-fluid  p-2" style={{backgroundImage: `url("/assets/backgroundabout.jpg")`, backgroundRepeat:"no-repeat",backgroundPosition:"right", WebkitBackgroundSize:"cover"}}>
      {alert.message && (
        <div className={`alert alert-${alert.type === 'success' ? 'success' : 'danger'}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={sendEmail} className="booking-form">
        <div className="form-group">
          <label className='text-end text-light mb-2 fw-blod'>الاسم الكامل</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" أدخل الاسم الكامل" 
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-blod'>البريد الالكتروني</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="البريد الالكتروني"
          />
        </div>
        
        <div className="form-group">
          <label  className='text-end text-light mb-2 fw-blod'>رقم الهاتف:</label>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="(+212)0495403802"
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-blod'>اختيار اليوم</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label  className='text-end text-light mb-2 fw-blod'>اختيار الوقت</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-blod'>راسلنا</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="أدخل أي تفاصيل إضافية"
          />
        </div>

        <button type="submit" className='btn btn-outline-dark'>احجز الان</button>
      </form>
    </div>
  );
};

export default BookingForm;
