import React, { useState, useEffect } from 'react';
import { addDays } from 'date-fns';

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
    const dueTime = addDays(new Date(), 5).getTime();

    const interval = setInterval(() => {
      let now = new Date().getTime(),
        time = dueTime - now,
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((time % (1000 * 60)) / 1000);

      setTimes(prevTimes => ({ ...prevTimes, days, hours, minutes, seconds }));

      // stop intervals
      if (time < 0) {
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
