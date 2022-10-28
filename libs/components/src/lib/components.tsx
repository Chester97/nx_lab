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
      <p>Stay tuned guys, new 'game changer' co-founders prepared something REALLY SPECIAL!</p>
      <h2>additional info</h2>
    </StyledComponents>
  );
}

export default Components;
