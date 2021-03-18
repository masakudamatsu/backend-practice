import React from 'react';
import {render, screen} from '@testing-library/react';

import TemplateElement from './TemplateElement';

const mockProps = {};

describe('Props work as intended', () => {
  test('testProp', () => {
    render(<TemplateElement testProp data-testid="TemplateElement" />);
    expect(screen.getByTestId('TemplateElement')).toHaveStyle(
      `display: inline-block`,
    );
  });
});

test('renders UI correctly', () => {
  const {container} = render(<TemplateElement {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="TemplateElement-uvuhvl-0"
      />
    </div>
  `);
});
