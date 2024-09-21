import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

function Contact() {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarWrapper>
      <h1>Book a Wash</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </CalendarWrapper>
  );
}

export default Contact;
