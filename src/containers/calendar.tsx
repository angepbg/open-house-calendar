import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Days } from '../components/Days';
import { Wrapper } from './styles';

/**
 * Renders the Calendar component with the current date and sets the current date.
 *
 * @return {JSX.Element} The rendered Calendar component
 */
export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Wrapper>
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Days currentDate={currentDate} />
    </Wrapper>
  );
};
