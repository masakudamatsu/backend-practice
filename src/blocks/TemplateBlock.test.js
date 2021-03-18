import React from 'react';
import {render, screen} from '@testing-library/react';

import TemplateBlock from './TemplateBlock';

const mockProps = {};

describe('Props work as intended', () => {
  test('testProp', () => {
    render(<TemplateBlock testProp data-testid="TemplateBlock" />);
    expect(screen.getByTestId('TemplateBlock')).toHaveStyle(
      `display: inline-block`,
    );
  });
});

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<TemplateBlock {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="TemplateBlock-sc-1uislth-0"
        />
      </div>
    `);
  });
});
