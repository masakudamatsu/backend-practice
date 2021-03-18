import {css} from 'styled-components';

export function cssLinkText({
  backgroundColor,
  backgroundColorOnHover,
  linkTextColor,
  fontMetrics,
}) {
  return css`
    &:link,
    &:visited {
      background: ${backgroundColorOnHover}; /* Fallback for browsers incompatible with CSS Gradient (https://caniuse.com/css-gradients) */
      background: linear-gradient(
        to bottom,
        transparent 50%,
        currentColor 50%,
        currentColor
      );
      background-position: 0
        ${(0.4 + fontMetrics.capHeight / fontMetrics.unitsPerEm).toFixed(4)}em; /* As text crop sets the link text box's height equal to cap height, 0.4(em) measures the distance between baseline and the link text underline */
      background-repeat: no-repeat;
      background-size: 100% 2px;
      color: ${linkTextColor};
      cursor: pointer;
      text-decoration: none;
      text-shadow: 0.03em 0 ${backgroundColor}, -0.03em 0 ${backgroundColor},
        0 0.03em ${backgroundColor}, 0 -0.03em ${backgroundColor}; /* following https://eager.io/blog/smarter-link-underlines/ */
    }

    &:focus,
    &:hover {
      background: ${backgroundColorOnHover};
      outline: none;
      text-shadow: none;
    }

    &:active {
      background: none; /* To make it blink */
    }

    &:visited:focus,
    &:visited:hover {
      background: ${backgroundColorOnHover};
      outline: none;
      text-shadow: none;
    }

    &:visited:active {
      background: none;
    }
  `;
}
