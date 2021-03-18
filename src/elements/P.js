import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
  text-align: ${props => (props.rightAligned ? `right` : `left`)};
`;

P.propTypes = {
  rightAligned: PropTypes.bool,
};

export default P;
