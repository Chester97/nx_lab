import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Components(props: ComponentsProps) {
  return (
    <StyledComponents>
      <h1>Arbi project</h1>
      <p>Stay tuned guys, new 'game changer' co-founders prepared something REALLY SPECIAL!</p>
      <p>staging test</p>
      <p>staging test</p>
    </StyledComponents>
  );
}

export default Components;
