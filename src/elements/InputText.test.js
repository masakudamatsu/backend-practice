import React from 'react';
import {render, screen} from '@testing-library/react';

import InputText from './InputText';

const mockProps = {};

describe.skip('changes UI with props', () => {
  test('... if the ... prop is provided', () => {
    render(<InputText testProp data-testid="InputText" />);
    expect(screen.getByTestId('InputText')).toHaveStyle();
  });
});

test('renders UI correctly', () => {
  const {container} = render(<InputText {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: #0a0a0a;
      border-color: #ffffff;
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      color: #ffffff;
    }

    .c0:active,
    .c0:hover,
    .c0:focus {
      border-width: 2px;
      outline: none;
    }

    <div>
      <input
        autocomplete="off"
        class="c0"
        type="text"
      />
    </div>
  `);
});
