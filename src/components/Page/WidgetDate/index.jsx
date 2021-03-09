import React, { useState, useEffect } from 'react';

function WidgetDate(props) {
  //const {lang, timezone} = props;

  const lang = 'ru';
  const timezone = 'Europe/Berlin';

  const optionsDate = {
    timeZone: timezone,
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };

  const optionsTime = {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  };

  const getDate = () => new Date().toLocaleString(lang, optionsDate);
  const getTime = () => new Date().toLocaleString(lang, optionsTime);

  const [date, setDate] = useState(getDate());
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(getDate());
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <>
      <div>{date}</div>
      <div>{time}</div>
    </>
  );
}

export default WidgetDate;
