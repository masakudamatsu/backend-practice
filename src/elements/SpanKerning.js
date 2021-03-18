import styled from 'styled-components';
import PropTypes from 'prop-types';

const SpanKerning = styled.span`
  position: relative;
  ${props =>
    props.colon &&
    `
    bottom: 0.1em;
    right: 0.2em;
  `}
  ${props =>
    props.dash &&
    `
    top: 0.05em;
  `}
`;

SpanKerning.propTypes = {
  colon: PropTypes.bool,
  dash: PropTypes.bool,
};
export default SpanKerning;
