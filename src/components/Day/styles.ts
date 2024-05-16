import { styled } from 'styled-components';

interface DayType {
  isToday: boolean;
  isTourDay: boolean;
}

export const WrapperDay = styled.div<DayType>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #eee;
  }
  ${({ isToday, isTourDay }) => {
    if (isToday) {
      return `
          background-color: #1616b7;
          color: white;
          &:hover {
            background-color: #6464df;
          }
        `;
    } else if (isTourDay) {
      return `
          background-color: #0a530a;
          color: white;
          &:hover {
            background-color: #2f8e2f;
          }
        `;
    }
  }}

  @media (min-width: 768px) {
    width: 100px;
  }
`;
