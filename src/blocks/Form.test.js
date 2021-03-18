import React from 'react';
import {render, screen} from '@testing-library/react';

import Form from './Form';

const mockProps = {};

describe.skip('changes UI with props', () => {
  test('... if the ... prop is provided', () => {
    render(<Form testProp data-testid="Form" />);
    expect(screen.getByTestId('Form')).toHaveStyle(`display: inline-block`);
  });
});

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Form {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
      }

      <div>
        <form
          class="c0"
        />
      </div>
    `);
  });
  test('InputText', () => {
    const {container} = render(<Form.InputText {...mockProps} />);
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

      .c1 {
        padding-bottom: 0.625rem;
        padding-left: 0.3125rem;
        padding-top: 1.25rem;
        width: 100%;
      }

      .c1:active,
      .c1:hover,
      .c1:focus {
        padding-bottom: 0.5625rem;
        padding-left: 0.25rem;
        padding-top: 1.1875rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          padding-bottom: 0.75rem;
          padding-left: 0.375rem;
          padding-top: 1.5rem;
        }

        .c1:active,
        .c1:hover,
        .c1:focus {
          padding-bottom: 0.6875rem;
          padding-left: 0.3125rem;
          padding-top: 1.4375rem;
        }
      }

      <div>
        <input
          autocomplete="off"
          class="c0 c1"
          type="text"
        />
      </div>
    `);
  });
  test('Label', () => {
    const {container} = render(<Form.Label {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: #ffffff;
      }

      .c1 {
        position: absolute;
        top: 0.375rem;
        left: 0.375rem;
        -webkit-transform: translateX(-0.08em);
        -ms-transform: translateX(-0.08em);
        transform: translateX(-0.08em);
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          top: 0.4375rem;
          left: 0.4375rem;
        }
      }

      <div>
        <label
          class="c0 c1"
        />
      </div>
    `);
  });
});
