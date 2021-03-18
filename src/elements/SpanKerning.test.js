import React from 'react';
import {render, screen} from '@testing-library/react';

import SpanKerning from './SpanKerning';

const mockProps = {};

describe('renders UI correctly', () => {
  test('for a colon', () => {
    const {container} = render(<SpanKerning colon {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        bottom: 0.1em;
        right: 0.2em;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
  test('for a dash', () => {
    const {container} = render(<SpanKerning dash {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        top: 0.05em;
      }

      <div>
        <span
          class="c0"
        />
      </div>
    `);
  });
});
