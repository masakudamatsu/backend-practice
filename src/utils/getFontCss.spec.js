import React from 'react';
import styled from 'styled-components';
import {render, screen} from '@testing-library/react';

import {fontCssGenerator} from './getFontCss';

describe('fontCssGenerator', () => {
  test('converts type scale parameters into CSS declarations', () => {
    const typescale = {
      capHeight: 70.2,
      xHeightRatio: 5,
      betweenLinesRatio: 6,
      textCropEm: {
        top: -0.249,
        bottom: -0.255,
      },
      fontMetrics: {
        fontFamily: "'Poppins',Verdana,sans-serif",
        fontWeight: 100,
        unitsPerEm: 1000,
        xHeight: 540,
        capHeight: 702,
      },
    };

    const MockComponent = styled.div`
      ${fontCssGenerator(typescale)}
    `;

    const {container} = render(<MockComponent data-testid="mock-component" />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 6.25rem;
        font-weight: 100;
        line-height: 1.188;
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.249em;
      }

      .c0::after {
        margin-top: -0.255em;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 7.5rem;
        }
      }

      <div>
        <div
          class="c0"
          data-testid="mock-component"
        />
      </div>
    `);
  });
  test('ignores missing line-height and text crop parameters', () => {
    const typescale = {
      capHeight: 70.2,
      fontMetrics: {
        fontFamily: "'Poppins', Verdana, sans-serif",
        fontWeight: 100,
        unitsPerEm: 1000,
        xHeight: 540,
        capHeight: 702,
      },
    };

    const MockComponent = styled.div`
      ${fontCssGenerator(typescale)}
    `;

    const {container} = render(<MockComponent />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 6.25rem;
        font-weight: 100;
        line-height: normal;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 7.5rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('converts x-height into font-size if x-height rather than cap height is provided', () => {
    const typescale = {
      xHeight: 54,
      fontMetrics: {
        fontFamily: "'Poppins', Verdana, sans-serif",
        fontWeight: 100,
        unitsPerEm: 1000,
        xHeight: 540,
        capHeight: 702,
      },
    };

    const MockComponent = styled.div`
      ${fontCssGenerator(typescale)}
    `;

    render(<MockComponent data-testid="mock-component" />);
    expect(screen.getByTestId('mock-component')).toHaveStyle(
      `font-size: 6.25rem`,
    );
  });
});
