import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      date: startDate.toLocaleDateString(),
      time,
      phoneNumber
    };

    emailjs
      .send('Ismailaytali', 'template_5f8mp4e', templateParams, 'qx8iCpuLb7AezUF90')
      .then(
        (result) => {
          alert('Booking sent successfully!');
        },
        (error) => {
          console.log('Error:', error);
          alert('Error sending booking. Please try again.');
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="booking-form">
      <div>
        <label>الاسم الكامل:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label>البريد الالكتروني:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>رقم الهاتف:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label>اختيار اليوم:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          required
        />
      </div>

      <div>
        <label>اختيار الوقت:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div>
        <label>راسلنا:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter any additional details"
        />
      </div>

      <button type="submit">احجز الان</button>

     
    </form>
  );
};

export default BookingForm;
