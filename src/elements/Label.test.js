import React from 'react';
import {render, screen} from '@testing-library/react';

import Label from './Label';

const mockProps = {};

describe.skip('changes UI with props', () => {
  test('... if the ... prop is provided', () => {
    render(<Label testProp data-testid="Label" />);
    expect(screen.getByTestId('Label')).toHaveStyle(`display: inline-block`);
  });
});

test('renders UI correctly', () => {
  const {container} = render(<Label {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      color: #ffffff;
    }

    <div>
      <label
        class="c0"
      />
    </div>
  `);
});
