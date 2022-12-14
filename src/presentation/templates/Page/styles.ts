import styled from 'styled-components';

export const PageTempleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`;
export const PageTempleteHeading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;
export const PageTempleteBody = styled.div`
  P {
    font-size: var(--medium);
    text-align: center;
    line-height: var(--medium);
  }
`;
