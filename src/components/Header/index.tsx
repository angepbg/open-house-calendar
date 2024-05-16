import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { HeaderProps } from './index-interface';
import { Wrapper, Title } from './styles';

/**
 * Renders the Header of the Calendar with buttons to navigate to the previous or
 * next month and also show the month and year of the current date.
 *
 * @param {Date} currentDate - The current date.
 * @param {Function} setCurrentDate - Function to set the current date.
 * @return {JSX.Element} The rendered Header component
 */
export const Header: React.FC<HeaderProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  const monthName = format(currentDate, 'MMMM');
  const year = format(currentDate, 'yyyy');

  /**
   * Function to handle going to the previous month.
   *
   * @param {Date} currentDate - The current date.
   * @param {Function} setCurrentDate - Function to set the current date.
   * @return {void} No return value.
   */
  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  /**
   * A function to handle going to the next month.
   *
   * @param {void} No parameters.
   * @return {void} No return value.
   */
  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <Wrapper>
      <button onClick={handlePrevMonth}>Prev</button>
      <Title>
        {monthName} {year}
      </Title>
      <button onClick={handleNextMonth}>Next</button>
    </Wrapper>
  );
};
