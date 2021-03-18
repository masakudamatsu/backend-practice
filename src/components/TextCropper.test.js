import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import TextCropper from './TextCropper';

const mockProps = {};

test('is accessible', async () => {
  const {container} = render(<TextCropper {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('renders UI correctly', () => {
  const {container} = render(<TextCropper {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      left: 25vw;
      position: absolute;
      top: 25vh;
      width: 50vw;
    }

    .c1 {
      background-color: #03dac6;
      height: 70.2px;
      width: 100%;
    }

    .c2 {
      background-color: #6200ee;
      height: 70.2px;
      left: 0;
      position: absolute;
      top: 70.2px;
      width: 100%;
      z-index: -1;
    }

    .c3 {
      border: 1px dashed rgb(254,254,50);
      color: #ffffff;
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 6.25rem;
      font-weight: 100;
      line-height: 1.188;
      width: 100%;
    }

    .c3::before,
    .c3::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c3::before {
      margin-bottom: -0.249em;
    }

    .c3::after {
      margin-top: -0.255em;
    }

    @media only screen and (min-width:45.5rem) {
      .c1 {
        height: 84.24px;
      }
    }

    @media only screen and (min-width:45.5rem) {
      .c2 {
        height: 84.24px;
        top: 84.24px;
      }
    }

    @media only screen and (min-width:45.5rem) {
      .c3 {
        font-size: 7.5rem;
      }
    }

    <div>
      <section
        class="c0"
      >
        <div
          class="c1"
        />
        <div
          class="c2"
        />
        <p
          class="c3"
        >
          Hex
        </p>
        <div
          class="c1"
        />
      </section>
    </div>
  `);
});
