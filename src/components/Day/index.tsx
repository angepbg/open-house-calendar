import React from 'react';
import { format, isToday, isSameDay } from 'date-fns';
import { WrapperDay } from './styles';
import { DayProps } from './index-interface';
import { AVAILABLE_TOUR_DAYS } from '../../constants/availableDays';
/**
 * Renders the Day component with the day based on the props.
 *
 * @return {JSX.Element} The rendered Day component
 */
export const Day: React.FC<DayProps> = ({ day }) => {
  const today = isToday(day);

  // Check if the date has an available tour day
  const tourDay = AVAILABLE_TOUR_DAYS.some(([tourDate]) =>
    isSameDay(tourDate, day),
  );

  const availableTourDayData = tourDay
    ? AVAILABLE_TOUR_DAYS.find((tourDate) => isSameDay(tourDate[0], day))
    : null;

  const onClick = () => {
    const URL = availableTourDayData ? availableTourDayData[1] : null;
    URL && window.location.assign(String(URL));
  };

  return (
    <WrapperDay isToday={today} isTourDay={tourDay} onClick={onClick}>
      {format(day, 'd')}
    </WrapperDay>
  );
};
