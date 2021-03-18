import styled from 'styled-components';
import PropTypes from 'prop-types';

import P from 'src/elements/P';

import {color} from 'src/utils/specColor';
import {cssLinkText} from 'src/utils/cssLinkText';
import {font} from 'src/utils/specFont';
import {footer} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const Footer = styled.footer`
  background-color: ${color.footer.background};
  border-top: 1px solid ${color.footer.borderTop};
  color: ${color.footer.font};
  max-width: 33em; /* One character is on average 0.5em, and 66 is regarded as the ideal number of characters per line (source: http://webtypography.net/2.1.2) */
  width: 100%;

  a {
    ${cssLinkText({
      backgroundColor: color.footer.background,
      backgroundColorOnHover: color.footer.linkText.background,
      linkTextColor: color.footer.linkText.font,
      fontMetrics: font.footer.fontMetrics,
    })}
  }
`;

Footer.Paragraph = styled(P)``;

Footer.Whitespace = styled.div`
  height: ${remify(footer.betweenParagraphs)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(footer.betweenParagraphs * scale)};
  }
`;

export default Footer;
