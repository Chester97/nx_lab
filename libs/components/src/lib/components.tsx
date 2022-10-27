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
      <h3>test xd</h3>
      <h4>D3 TEST</h4>
      <h4>D4 TEST</h4>
    </StyledComponents>
  );
}

export default Components;
