import styled from 'styled-components';
import PropTypes from 'prop-types';

import {header, main} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/mediaQuery';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const Main = styled.main`
  padding-top: ${remify(header.height + header.borderBottomWidth)};
  @media only screen and ${mediaQuery.font} {
    padding-top: ${remify(header.height * scale + header.borderBottomWidth)};
  }
`;

Main.MarginTop = styled.div`
  height: ${remify(main.whitespace.marginTop)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(main.whitespace.marginTop * scale)};
  }
`;

Main.propTypes = {};

export default Main;
