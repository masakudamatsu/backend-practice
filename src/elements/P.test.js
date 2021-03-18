import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

test('right-aligns the text if the rightAligned prop is provided', () => {
  render(<P rightAligned {...mockProps} data-testid="paragraph" />);
  expect(screen.getByTestId('paragraph')).toHaveStyle('text-align: right');
});

test('renders UI correctly:', () => {
  const {container} = render(<P {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      text-align: left;
    }

    <div>
      <p
        class="c0"
      />
    </div>
  `);
});
