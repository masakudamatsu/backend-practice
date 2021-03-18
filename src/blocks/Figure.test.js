import React from 'react';
import {render, screen} from '@testing-library/react';

import Figure from './Figure';
import {color} from 'src/utils/specColor';

const mockProps = {};

test('adds the border if the `borderColor` prop is provided', () => {
  render(<Figure borderColor={color.figure.border} data-testid="figure" />);
  expect(screen.getByTestId('figure')).toHaveStyle(
    `border: 1px solid ${color.figure.border}`,
  );
});
test('renders UI correctly', () => {
  const {container} = render(<Figure />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      max-width: 33em;
      overflow: hidden;
      width: 100%;
    }

    <div>
      <figure
        class="c0"
      />
    </div>
  `);
});
