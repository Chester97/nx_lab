import styled from 'styled-components';
import { Components, Button } from '@foodity/components';

const StyledPage = styled.div`
  .page {
  }
`;

// name: CI
// on:
//   pull_request:
//     types: [ labeled ]
//
// jobs:
//   build:
//     if: ${{ github.event.label.name == 'bug' }}
// runs-on: ubuntu-latest
// steps:
//   - uses: actions/checkout@v2
// with:
// fetch-depth: 0
// - uses: nrwl/nx-set-shas@v3
// - run: npm ci
//
// - run: npx nx lint foodity
// - run: npx nx test foodity
// - run: npx nx build foodity


// name: CI
// on:
//   push:
//     branches:
//       - main
// pull_request:
//
//   jobs:
//     main:
//       runs-on: ubuntu-latest
// steps:
//   - uses: actions/checkout@v2
// with:
// fetch-depth: 0
// - uses: nrwl/nx-set-shas@v3
// - run: npm ci
//
// - run: npx nx lint foodity
// - run: npx nx test foodity
// - run: npx nx build foodity
//


export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Components />
      <Button />
      <h1>elo</h1>
    </StyledPage>
  );
}

export default Index;
