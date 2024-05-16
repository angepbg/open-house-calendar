import React from 'react';
import { DaysProps } from './index-interface';
import { startOfMonth, endOfMonth, addDays } from 'date-fns';
import { Day } from '../Day';
import { GridCalendar } from './styles';
/**
 * Renders the Days component with the days of the month based on the currentDate.
 *
 * @return {JSX.Element} The rendered Days component
 */
export const Days: React.FC<DaysProps> = ({ currentDate }) => {
  /**
   * Function to calculate the days of the month based on the input date.
   *
   * @param {Date} date - The date to calculate the month days for.
   * @return {Date[]} An array of dates representing the days of the month.
   */
  const getMonthDays = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    const days = [];
    let current = start;

    while (current <= end) {
      days.push(current);
      current = addDays(current, 1);
    }

    return days;
  };

  const days = getMonthDays(currentDate);

  return (
    <GridCalendar>
      {days.map((day) => {
        return <Day key={String(day)} day={day} />;
      })}
    </GridCalendar>
  );
};
