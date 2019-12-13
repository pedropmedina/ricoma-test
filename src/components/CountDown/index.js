import React, { useState, useEffect } from 'react';
import {
  addDays,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from 'date-fns';

// styles
import * as Styled from './styled';

// assets
import { ReactComponent as CloseIcon } from '../../assets/Close-Button.svg';

const paddTime = n => (parseInt(n) <= 9 ? `0${n}` : n);

export const CountDown = () => {
  const [times, setTimes] = useState({});
  const [showCountDown, setShowCountDown] = useState(true);

  useEffect(() => {
    const interval = handleCountDown();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCountDown = () => {
    const dueDate = addDays(new Date(), 5);

    const interval = setInterval(() => {
      let currentDate = Date.now(),
        days = differenceInDays(dueDate, currentDate),
        hours = differenceInHours(dueDate, currentDate),
        minutes = differenceInMinutes(dueDate, currentDate),
        seconds = differenceInSeconds(dueDate, currentDate);

      setTimes(prevTimes => ({ ...prevTimes, days, hours, minutes, seconds }));

      // stop intervals
      if (minutes === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return interval;
  };

  return (
    <Styled.CountDown showCountDown={showCountDown}>
      <Styled.Content>
        <Styled.ContentInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Styled.ContentInfo>
        <Styled.ContentTime>
          <Styled.TimeInterval>
            <Styled.IntervalNumber>
              {paddTime(times.days)}
            </Styled.IntervalNumber>
            <Styled.IntervalName>days</Styled.IntervalName>
          </Styled.TimeInterval>
          <Styled.TimeInterval>
            <Styled.IntervalNumber>
              {paddTime(times.hours)}
            </Styled.IntervalNumber>
            <Styled.IntervalName>hours</Styled.IntervalName>
          </Styled.TimeInterval>
          <Styled.TimeInterval>
            <Styled.IntervalNumber>
              {paddTime(times.minutes)}
            </Styled.IntervalNumber>
            <Styled.IntervalName>minutes</Styled.IntervalName>
          </Styled.TimeInterval>
          <Styled.TimeInterval>
            <Styled.IntervalNumber>
              {paddTime(times.seconds)}
            </Styled.IntervalNumber>
            <Styled.IntervalName>seconds</Styled.IntervalName>
          </Styled.TimeInterval>
        </Styled.ContentTime>
      </Styled.Content>
      <Styled.CloseCountDown onClick={() => setShowCountDown(false)}>
        <CloseIcon />
      </Styled.CloseCountDown>
    </Styled.CountDown>
  );
};
