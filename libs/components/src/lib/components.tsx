import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Welcome to Just kidding?!</h1>
      <h2>HELLOOOOOO?!??!?!?</h2>
    </StyledComponents>
  );
}

export default Components;
