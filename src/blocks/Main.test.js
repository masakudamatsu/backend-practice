import React from 'react';
import {render, screen} from '@testing-library/react';

import Main from './Main';

const mockProps = {};

// describe('Props work as intended', () => {
//   test('prop 1', () => {
//     render(<Main testProp data-testid="Main" />);
//     expect(screen.getByTestId('Main')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Main {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        padding-top: 2.875rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          padding-top: 3.4375rem;
        }
      }

      <div>
        <main
          class="c0"
        />
      </div>
    `);
  });
  test('MarginTop', () => {
    const {container} = render(<Main.MarginTop {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.9375rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.125rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
