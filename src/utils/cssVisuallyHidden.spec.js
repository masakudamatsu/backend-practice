import React from 'react';
import styled from 'styled-components';
import {render, screen} from '@testing-library/react';

import {cssVisuallyHidden} from './cssVisuallyHidden';

test('applies CSS declarations as expected', () => {
  const MockComponent = styled.h1`
    ${cssVisuallyHidden}
  `;

  const {container} = render(<MockComponent data-testid="mock-component" />);

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      -webkit-clip: rect(1px 1px 1px 1px);
      clip: rect(1px 1px 1px 1px);
      -webkit-clip: rect(1px,1px,1px,1px);
      clip: rect(1px,1px,1px,1px);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    <div>
      <h1
        class="c0"
        data-testid="mock-component"
      />
    </div>
  `);
});
