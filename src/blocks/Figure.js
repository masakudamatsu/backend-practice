import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';

const Figure = styled.figure`
  ${props =>
    props.borderColor &&
    `
    border-color: ${props.borderColor};
    border-style: solid;
    border-width: 1px;
  `}
  max-width: 33em;
  overflow: hidden; /* Control the image size by the box size of the figure */
  width: 100%;
`;

Figure.Img = Img;

Figure.propTypes = {
  borderColor: PropTypes.string,
};

export default Figure;
