import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';  // Import the translation hook
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingForm = () => {
  const { t } = useTranslation();  // Initialize translation function
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });

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
          setAlert({ message: t('bookingForm.successMessage'), type: 'success' });
          resetForm();
        },
        (error) => {
          console.log('Error:', error);
          setAlert({ message: t('bookingForm.errorMessage'), type: 'error' });
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
    <div className="container-fluid p-2" style={{backgroundImage: `url("/assets/backgroundabout.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "right", WebkitBackgroundSize: "cover"}}>
      {alert.message && (
        <div className={`alert alert-${alert.type === 'success' ? 'success' : 'danger'}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={sendEmail} className="booking-form">
        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.fullName')}</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('bookingForm.enterFullName')}
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.email')}</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={t('bookingForm.enterEmail')}
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.phoneNumber')}</label>
          <input
            type="tel"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder={t('bookingForm.enterPhoneNumber')}
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.selectDate')}</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.selectTime')}</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='text-end text-light mb-2 fw-bold'>{t('bookingForm.message')}</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('bookingForm.enterMessage')}
          />
        </div>

        <button type="submit" className='btn btn-outline-dark'>{t('bookingForm.bookNow')}</button>
      </form>
    </div>
  );
};

export default BookingForm;
