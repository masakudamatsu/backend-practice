import styled from 'styled-components';
import PropTypes from 'prop-types';

import H1 from 'src/elements/H1';
import Img from 'src/elements/Img';

import {animation} from 'src/utils/specAnimation';
import {color} from 'src/utils/specColor';
import {header, twoColumns, threeColumns} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const height = {
  narrowScreen: header.height + header.borderBottomWidth,
  wideScreen: header.height * scale + header.borderBottomWidth,
};
const cssAnimation = {
  show: `
    transform: translate(0, 0);
    transition: transform ${animation.header.show.duration} ${animation.header.show.easing};
  `,
  hide: `
    transform: translate(0, -${remify(
      header.height,
    )}); /* Leave the bottom border visible, to indicate it's hiding behind the screen frame */
    transition: transform ${animation.header.hide.duration} ${
    animation.header.hide.easing
  };
    @media only screen and ${mediaQuery.font} {
      transform: translate(0, -${remify(header.height * scale)});
    }
  `,
};

// Center-align child elements rather than setting side margins
const Header = styled.header`
  background-color: ${color.header.background};
  border-bottom-color: ${color.header.borderBottom};
  border-bottom-style: solid;
  border-bottom-width: ${header.borderBottomWidth}px;
  display: flex;
  height: ${remify(height.narrowScreen)};
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;

  ${props => props.show && cssAnimation.show}
  ${props => props.hide && cssAnimation.hide}

  @media only screen and ${mediaQuery.font} {
    height: ${remify(height.wideScreen)};
  }
`;

// Left-align child elements for multiple column layouts
Header.OuterWrapper = styled.div`
  @media only screen and ${mediaQuery.twoColumns} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 ${remify(header.whitespace.sideMargin)};
    width: ${remify(twoColumns.minWidth)};
  }
  @media only screen and ${mediaQuery.threeColumns} {
    width: ${remify(threeColumns.minWidth)};
  }
`;

Header.InnerWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: ${remify(header.innerWidth)};
  @media only screen and ${mediaQuery.font} {
    width: ${remify(header.innerWidth * scale)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    width: 100%;
  }
`;

Header.ImgWrapper = styled.a`
  align-items: center;
  display: flex;
  height: 100%;
  padding-right: ${remify(header.whitespace.betweenLogoAndH1)};
  width: ${remify(header.logo.width + header.whitespace.betweenLogoAndH1)};
`;

Header.Img = styled(Img)``;

Header.H1 = styled(H1)`
  padding-bottom: ${remify(header.h1.paddingBottom)};
  padding-top: ${remify(header.h1.paddingTop)};
  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${remify(header.h1.paddingBottom * scale)};
    padding-top: ${remify(header.h1.paddingTop * scale)};
  }
`;

Header.propTypes = {
  hide: PropTypes.bool,
  show: PropTypes.bool,
};

export default Header;
