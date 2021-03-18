import React, { useState, useEffect } from 'react';
import './CapitalDateTime.scss';

export default function CapitalDateTime({ country }) {
  const classDateTime = {
    day: 'capitalDateTime-common__day',
    month: 'capitalDateTime-common__month',
    year: 'capitalDateTime-common__year',
    time: 'capitalDateTime-common__time',
  };

  const calcTime = () => {
    const getLocal = () => {
      const selectLang = document.querySelector('.language-select').value;
      switch (selectLang) {
        case 'en|en':
          return 'en-En';
        case 'en|pl':
          return 'pl-PL';
        case 'en|ru':
          return 'ru-RU';
        default:
          return 'en-Ru';
      }
    };

    const date = new Date();
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const hour = country.timeDifference;
    const preResultDate = new Date(+date + hour * 60 * 6e4);
    const weekday = preResultDate.toLocaleString(getLocal(), { weekday: 'long' });
    const fullDate = preResultDate.toLocaleString(getLocal(), dateOptions);
    const time = new Date(+date + hour * 60 * 6e4).toLocaleString(getLocal(), timeOptions);

    return (
      <div className="capitalDateTime-common">
        <p className="capitalDateTime-common__day">{weekday}</p>
        <p className="capitalDateTime-common__month">{fullDate}</p>
        <p className="capitalDateTime-common__time">{time}</p>
      </div>
    );
  };

  const [currentTime, setCurrentTime] = useState(calcTime());

  useEffect(() => {
    const indicator = setInterval(() => {
      setCurrentTime(calcTime());
    }, 1000);

    return () => {
      clearInterval(indicator);
    };
  }, [currentTime]);

  return (
    <div className="clock-widget">
      <div className="capitalDateTime">
        {calcTime()}
      </div>
    </div>
  );
}
