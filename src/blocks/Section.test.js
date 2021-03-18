import React from 'react';
import {render, screen} from '@testing-library/react';

import Section from './Section';

import {section} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

describe('Props work as intended', () => {
  test('backgroundColor', () => {
    const backgroundColor = '#343434';
    render(
      <Section backgroundColor={backgroundColor} data-testid="section">
        <a href="" data-testid="link-text">
          Link Text
        </a>
      </Section>,
    );
    expect(screen.getByTestId('section')).toHaveStyle(
      `background-color: ${backgroundColor}`,
    );
    expect(screen.getByTestId('link-text')).toHaveStyle(
      `text-shadow: 0.03em 0 ${backgroundColor},-0.03em 0 ${backgroundColor},0 0.03em ${backgroundColor},0 -0.03em ${backgroundColor};`,
    );
  });

  test('fontColor', () => {
    const fontColor = '#eeeeee';
    render(
      <Section fontColor={fontColor} data-testid="section">
        <a href="" data-testid="link-text">
          Link Text
        </a>
      </Section>,
    );
    expect(screen.getByTestId('section')).toHaveStyle(`color: ${fontColor}`);
  });

  test('linkTextBackground', () => {});

  test('linkTextColor', () => {
    const fontColor = '#eeeeee';
    render(
      <Section linkTextColor={fontColor} data-testid="section">
        <a href="" data-testid="link-text">
          Link Text
        </a>
      </Section>,
    );
    expect(screen.getByTestId('link-text')).toHaveStyle(`color: ${fontColor}`);
  });

  test('betweenParagraphs for Whitespace element', () => {
    render(<Section.Whitespace betweenParagraphs data-testid="whitespace" />);
    expect(screen.getByTestId('whitespace')).toHaveStyle(
      `height: ${remify(section.betweenParagraphs)}`,
    );
  });
});

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Section {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 1.3393rem;
        font-weight: 300;
        line-height: 1.274;
        background-color: inherit;
        color: inherit;
        max-width: 33em;
        width: 100%;
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.304em;
      }

      .c0::after {
        margin-top: -0.3325em;
      }

      .c0 a:link,
      .c0 a:visited {
        background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
        background-position: 0 1.1000em;
        background-repeat: no-repeat;
        background-size: 100% 2px;
        cursor: pointer;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-shadow: 0.03em 0 ,-0.03em 0 ,0 0.03em ,0 -0.03em;
      }

      .c0 a:focus,
      .c0 a:hover {
        outline: none;
        text-shadow: none;
      }

      .c0 a:active {
        background: none;
      }

      .c0 a:visited:focus,
      .c0 a:visited:hover {
        outline: none;
        text-shadow: none;
      }

      .c0 a:visited:active {
        background: none;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.6071rem;
        }
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
  test('Paragraph', () => {});
  test('Whitespace', () => {
    const {container} = render(<Section.Whitespace {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.7333rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 2.08rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
