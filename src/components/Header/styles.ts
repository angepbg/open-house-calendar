import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 394px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 744px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
